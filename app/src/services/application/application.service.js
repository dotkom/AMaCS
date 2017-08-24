import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class ApplicationServiceProvider{
  constructor(serviceManager,endpoint){
    this.serviceManager = serviceManager;
    this.endpoint = endpoint;
  }

  postApplication(application){
    const http = this.serviceManager.getService('http');
    return http.post(this.endpoint,application.json).catch((err) => {
      return Observable.throw(err.json());
    }).map((res) => {
      return res;
    });
  }

}