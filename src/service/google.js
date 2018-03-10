/* global gapi */

const endpoint = 'https://www.google.com/m8/feeds';
const scope = 'https://www.google.com/m8/feeds https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me';
const scriptUrl = '//apis.google.com/js/client.js';
const client_id = '606446327899-aqark103pcp32lcd4blruk51reavreb5.apps.googleusercontent.com';

class GoogleService {
  constructor() {
    this.token = '';
    this.load();
  }

  load() {
    let script = document.createElement('script');
    script.src = scriptUrl;
    document.head.appendChild(script);
  }

  login() {
    return new Promise((resolve, reject) => {
      gapi.auth.authorize({
        client_id,
        scope
      }, () => {
        localStorage.token = gapi.auth.getToken().access_token;
        resolve();
      }, reject);
    });
  }

  getContacts() {
    return fetch(`${endpoint}/contacts/default/full?alt=json&max-results=10000000&access_token=${localStorage.token}`);
  }

  getProfile() {
    return fetch(`https://www.googleapis.com/plus/v1/people/me?access_token=${localStorage.token}`);
  }
}


export default new GoogleService();
