/**
 * Created by Yubar on 4/11/2017.
 */

import {Injectable, OnInit} from "@angular/core";
import {User} from "../../registration-module/model/User";
import {Http, Headers} from "@angular/http";
import {apiEndPoint} from "../../AppConfig";
import {Base64Service} from "./Base64Service";

@Injectable()
export class LoginService implements OnInit{

  serverUrl = apiEndPoint;
  url = "login";
  user:User = null ;

  constructor(private http:Http, private base64Service:Base64Service) {
    if (localStorage.getItem("user"))
      this.user = JSON.parse(localStorage.getItem("user")) as User;
  }

  ngOnInit():void {

  }

  login(username:string, password:string): Promise<User> {
    let headers:Headers = new Headers();
    headers.append("Authorization", "Basic " + this.base64Service.encode(username + ":" + password));
    return this.http.get(this.serverUrl + this.url, {headers: headers, withCredentials: true})
      .toPromise()
      .then(resp => {
        localStorage.setItem("user", resp.text());
        this.user =  resp.json() as User;
        return this.user;
      });
  }

  logout():void {
    localStorage.removeItem("user");
    this.user = null;
  }

}
