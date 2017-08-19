import { Observable } from 'rxjs';

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