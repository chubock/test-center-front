/**
 * Created by Yubar on 4/11/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class LoginService {

  constructor(private http:Http) {}

  login(username:string, password:string): Promise<any> {

    let headers:Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(environment.clientId + ":" + environment.clientSecret));
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let body:string =
      "grant_type=" + environment.grantType + "&" +
      "scope=" + environment.scope + "&" +
      "username=" + username + "&" +
      "password=" + password;

    return this.http
      .post(environment.apiEndPoint + "/oauth/token", body, {headers: headers})
      .toPromise()
      .then(resp => {
        sessionStorage.setItem("token", resp.json().access_token);
        return resp;
      });
  }

  logout():void {
    sessionStorage.removeItem("token");
  }

}
