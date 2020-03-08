import { UserManager, Log } from 'oidc-client';
import { Observable, Subject, ReplaySubject } from 'rxjs';

import { User } from './user';

Log.logger = console;
Log.level = Log.DEBUG;

export class AuthServiceProvider {
  constructor(serviceManager, settings) {
    this.userManager = new UserManager(
      Object.assign(
        {
          popupWindowFeatures: 'location=no,toolbar=no,width=900,height=700,left=100,top=100',
        },
        settings
      )
    );
    this.settings = settings;
    this._user = null;
    this.userSubject = new Subject();
    this.userReplay = new ReplaySubject(1);
    this._loginState = 0;
    this.services = serviceManager;
    this._initBindings();
  }

  _initBindings() {
    this.userManager.events.addUserLoaded((user) => {
      this.setUser(user, true);
    });

    Observable.from(this.userManager.getUser()).subscribe((user) => {
      this.setUser(user, true);
    });

    Observable.from(this.userManager.signinPopupCallback()).subscribe((user) => {
      if (user) window.location.href = '/';
    });
  }

  setUser(user, push) {
    this._loginState = 0;
    this.services.getService('http').setToken(user && user.access_token);

    if (user && user.profile) {
      this._user = new User(user.access_token, user.scope, user.profile);
      if (push) {
        this.userSubject.next(this._user);
        this.userReplay.next(this._user);
      }
    } else if (push) {
      this.userSubject.next(null);
      this.userReplay.next(null);
    }
  }

  //Login
  login() {
    this._loginState = 1;
    Observable.from(this.userManager.signinPopup()).subscribe(
      () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      (err) => {
        console.log(`Error happened regarding SSO signin popup: ${err.message}`);
      }
    );
    return this.getUser();
  }

  logout() {
    this._loginState = 2;
    sessionStorage.clear();
    this.setUser(null, true);
    // Logs out user from OW4 aswell
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    Observable.from(this.userManager.signoutPopup()).subscribe(() => {});
    return this.getUser();
  }

  //Get user once
  getUser() {
    return this.userSubject.asObservable().take(1);
  }

  //Stream of users
  onUserChange() {
    return this.userReplay.asObservable();
  }
}
