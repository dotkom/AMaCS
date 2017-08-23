import { UserManager, Log } from 'oidc-client';
import { Observable, Subject, ReplaySubject } from 'rxjs';


import { User } from './user';

Log.logger = console;
Log.level = Log.ERROR;

export class AuthServiceProvider{
  constructor(serviceManager,settings){
    this.userManager = new UserManager(Object.assign({
      popupWindowFeatures: 'location=no,toolbar=no,width=900,height=700,left=100,top=100'
    }, settings));
    this.settings = settings;
    this._user = null;  
    this.userSubject = new Subject();
    this.userReplay = new ReplaySubject(1);
    this._loginState = 0;
    this.services = serviceManager;
    this._initBindings();
  }

  _initBindings(){
    
    this.userManager.events.addUserLoaded((user) => {
      this.setToken(user,true);
    });

    Observable.from(this.userManager.getUser()).subscribe((user) => {
      this.setToken(user,true);
    });

    Observable.from(this.userManager.signinPopupCallback()).subscribe((user) => {
      if(user)
        location.href = "/";
    });
  }
  
  setToken(user,push){
    let u = null;
    this._loginState = 0;
    this.services.getService("http").setToken(user && user.access_token);
    if(user && user.access_token)
      this.services.getService("http").get(this.settings.metadata.userinfo_endpoint).map((profile) => {
        return new User(user.access_token,user.scope,profile);
      }).catch((err) => {
        // return null if login failed
        return Observable.of(null);
      }).subscribe((user) => {
        this._user = user;
        if(push){
          this.userSubject.next(this._user);
          this.userReplay.next(this._user);
        };
      });
    else if(push)
      this.userSubject.next(null);
      this.userReplay.next(null);
       
  }

  //Login
  login(){
    this._loginState = 1;
    Observable.from(this.userManager.signinPopup()).subscribe(()=> {
    }, (err) => {
      console.log(`Error happened regarding SSO signin popup: ${err.message}`);
    });
    return this.getUser();
  }
  
  logout(){
    this._loginState = 2;
    sessionStorage.clear();
    this.setToken(null,true);
    //Revoking the token does not work "405 Method not allowed"
    /*Observable.from(this.userManager.signoutRedirect()).subscribe((user)=> {
    });*/
    return this.getUser();
  
  }

  //Get user once
  getUser(){
    return this.userSubject.asObservable().take(1);
  }

  //Stream of users
  onUserChange(){
    return this.userReplay.asObservable();
  }

}