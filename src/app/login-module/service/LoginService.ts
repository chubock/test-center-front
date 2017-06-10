/**
 * Created by Yubar on 4/11/2017.
 */

import {Injectable, OnInit} from "@angular/core";
import {User} from "../../registration-module/model/User";
import {Http, Headers} from "@angular/http";
import {apiEndPoint} from "../../AppConfig";

@Injectable()
export class LoginService implements OnInit{

  serverUrl = apiEndPoint;
  url = "login";

  constructor(private http:Http) {}

  ngOnInit():void {

  }

  getUser():User {
    return JSON.parse(sessionStorage.getItem("user")) as User;
  }

  login(username:string, password:string): Promise<User> {
    let headers:Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return this.http.get(this.serverUrl + this.url, {headers: headers, withCredentials: true})
      .toPromise()
      .then(resp => {
        sessionStorage.setItem("user", resp.text());
        return resp.json() as User;
      });
  }

  logout():void {
    this.http.delete(this.serverUrl + this.url, {withCredentials: true})
      .toPromise()
      .then(e => sessionStorage.removeItem("user"));
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
