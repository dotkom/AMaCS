import { getUser } from './auth';

class HttpService {
  async handleResponse(r) {
    if (!r.ok) {
      throw r;
    }
    return r.json();
  }

  /** Performs a general request
   * @param {Request} request
   * @return Promise<{}>
   */
  async request(request) {
    // Add token to request
    const user = await getUser();
    if (user) {
      request.headers.set('Authorization', `Bearer ${user.access_token}`);
    }
    return fetch(request);
  }
  /** performes a get request
   * @param {string} url
   * @param {params} {key: value}
   * @return Promise<{}>
   */
  async get(url, params) {
    let pUrl = url;
    if (params) {
      pUrl += HttpService.urlEncode(params);
    }
    // Create request
    const request = new Request(pUrl, { method: 'GET' });
    return this.request(request);
  }

  static urlEncode(data) {
    let ret = '';
    for (const key in data) {
      if (ret !== '') {
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
   * @return Promise<{}>
   */
  async post(url, body, url_encoded) {
    let pUrl = url;
    let pBody = body;
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    if (url_encoded) {
      pUrl += HttpService.urlEncode(pBody);
      headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      pBody = null;
    } else {
      pBody = JSON.stringify(pBody);
    }
    const request = new Request(pUrl, {
      method: 'POST',
      body: pBody,
      headers,
    });
    return this.request(request);
  }
}

export const http = new HttpService();
