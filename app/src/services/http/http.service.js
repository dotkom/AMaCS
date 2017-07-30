import { Observable, Subject } from 'rxjs';


export class HttpServiceProvider {

  constructor(serviceManager) {
    this.requestQueue = [];
    this.requestSubject = new Subject();
    // Subject for handling requests, each request is seperated by 150ms
    // Prevents 'DOS' protection
    this.requestSubject
      // Limit throughput by 150ms
      .concatMap(v => Observable.of(v).delay(150))
      // Subscrive to this stream
      .subscribe((requestPair) => {
        // preforme request
        this.count++;
        Observable.fromPromise(fetch(requestPair.request))
          /*
            Send response to handleResponse()
            handleResponse will resolve
          */
          .flatMap(response => this.handleResponse(response))
          // When the request is resolved, send it back to the source of the request
          .subscribe((r) => {
            requestPair.subject.next(r);
          }, (error) => {
            requestPair.subject.error(error);
          }, () => {
            requestPair.subject.complete();
          });
      });
  }

  setAuth(token) {
    if(token){
      this.auth_token = token.access_token;
      this.token_type = token.token_type;

    }else{
      this.auth_token = null;
      this.token_type = null;
    } 
 }

  handleResponse(r) {
    if (!r.ok) {
      return Observable.throw(r);
    }
    return r.json();
  }
  /** Performs a general request
   * @param {Request} url
   * @return Observable<{}>
   */
  request(request) {
    // Add token to request
    if(this.auth_token){
      request.headers.set('Authorization', `${this.token_type} ${this.auth_token}`);
    }
    const resolver = new Subject();
    // Push request into request 'stream'/queue
    this.requestSubject.next({ request, subject: resolver });
    return resolver.asObservable();
  }
  /** performes a get request
   * @param {string} url
   * @param {params} {key: value}
   * @return Observable<{}>
   */
  get(url, params) {
    let pUrl = url;
    if (params) {
      pUrl += HttpServiceProvider.urlEncode(params);
    }
    // Create request
    const request = new Request(pUrl, { method: 'GET' });
    return this.request(request);
  }

  static urlEncode(data) {
    let ret = '';
    for (const key in data) {
      if (ret != '') {
        ret += '&';
      }
      ret += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
    }
    return `?${ret}`;
  }
  /** Performs a post request
   * @param {string} url
   * @param {params} {key: value}
   * @param {boolean} url_encoded
   * @return Observable<{}>
   */
  post(url, body, url_encoded) {
    let pUrl = url;
    let pBody = body;
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    if (url_encoded) {
      pUrl += HttpServiceProvider.urlEncode(pBody);
      headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      pBody = null;
    } else {
      pBody = JSON.stringify(pBody);
    }
    // Create request
    const request = new Request(pUrl, {
      method: 'POST',
      body: pBody,
      headers,
    });
    return this.request(request);
  }
}