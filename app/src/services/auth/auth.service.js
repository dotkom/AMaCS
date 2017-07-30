import { UserManager, Log } from 'oidc-client';
import { Observable, Subject, ReplaySubject } from 'rxjs';

Log.logger = console;
Log.level = Log.ERROR;

export class AuthServiceProvider{
  constructor(serviceManager,settings){
    this.userManager = new UserManager(settings);
    this._user = null;  
    this.userSubject = new Subject();
    this.userReplay = new ReplaySubject(1);
    this._loginState = 0;
    this.services = serviceManager;
    this._initBindings();
    console.log(this.userManager);
  }

  _initBindings(){
    this.userManager.events.addUserLoaded((user) => {
      this.setToken(user,true);
    })
    Observable.from(this.userManager.getUser()).subscribe((user) => {
      this.setToken(user,true);
    });

    Observable.from(this.userManager.signinPopupCallback()).subscribe((user) => {
      if(user)
        location.href = "/";
    });
  }
  
  setToken(user,push){
    let u = user && user.access_token || null;
    this._user = u;
    this._loginState = 0;
    //This side-effect might be a bit sneaky
    this.services.getService("http").setAuth(u);
    if(push){
      this.userSubject.next(user);
      this.userReplay.next(user);
    }
  }

  //Login
  login(){
    this._loginState = 1;
    Observable.from(this.userManager.signinPopup()).subscribe(()=> {
    });
    return this.getUser();
  }
  
  logout(){
    this._loginState = 2;
    sessionStorage.clear();
    this.setToken(null,true);
    //Revoking the token does not work atm "405 Method not allowed"
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