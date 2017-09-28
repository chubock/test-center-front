/**
 * Created by Yubar on 4/11/2017.
 */

import {Injectable, OnInit} from "@angular/core";
import {User} from "../../registration-module/model/User";
import {Http, Headers} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class LoginService implements OnInit{

  serverUrl = environment.apiEndPoint;
  url = "oauth/token";

  constructor(private http:Http) {}

  ngOnInit():void {

  }

  getUser():User {
    return JSON.parse(sessionStorage.getItem("user")) as User;
  }

  // login(username:string, password:string): Promise<User> {
  //   let headers:Headers = new Headers();
  //   headers.append("Authorization", "Basic " + btoa(username + ":" + password));
  //   return this.http.get(this.serverUrl + this.url, {headers: headers, withCredentials: true})
  //     .toPromise()
  //     .then(resp => {
  //       sessionStorage.setItem("user", resp.text());
  //       return resp.json() as User;
  //     });
  // }

  login(username:string, password:string): Promise<any> {

    let headers:Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(environment.clientId + ":" + environment.clientSecret));

    let body:string =
      "grant_type=" + environment.grantType + "&" +
      "scope=" + environment.scope + "&" +
      "username=" + username + "&" +
      "password=" + password;

    return this.http
      .post("http://localhost:7000/" + this.url, body, {headers: headers})
      .toPromise()
      .then(resp => {
        localStorage.setItem("token", resp.json().access_token);
        return resp;
      });
  }

  // logout():void {
  //   this.http.delete(this.serverUrl + this.url, {withCredentials: true})
  //     .toPromise()
  //     .then(e => sessionStorage.removeItem("user"));
  // }

  logout():void {
    localStorage.removeItem("token");
  }

  isAuthenticated():boolean {
    return sessionStorage.getItem("user") != null;
  }

  hasAllRoles(...roles:string[]):boolean {
    let user:User = this.getUser();
    if (!user || ! user.roles)
      return false;
    for (let i = 0; i< roles.length; i++)
      if (user.roles.indexOf(roles[i]) == -1)
        return false;
    return true;
  }

  hasAnyRole(...roles:string[]):boolean {
    let user:User = this.getUser();
    if (!user || ! user.roles)
      return false;
    for (let i=0; i< roles.length; i++)
      if (user.roles.indexOf(roles[i]) != -1)
        return true;
    return false;
  }

}
