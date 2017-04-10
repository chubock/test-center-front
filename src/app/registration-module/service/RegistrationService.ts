import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {apiEndPoint} from "../../AppConfig";
import {User} from "../model/User";
/**
 * Created by Yubar on 4/9/2017.
 */

@Injectable()
export class RegistrationService {

  serverUrl:string = apiEndPoint;
  url:string = "register";

  constructor(private http:Http) {}

  isUsernameUnique(username:string): Promise<boolean> {
    let params:URLSearchParams = new URLSearchParams();
    params.set("username", username);
    return this.http.get(this.serverUrl + this.url + "/isUsernameUnique", {search: params})
      .toPromise();
  }

  register(user:User): Promise<User> {
    return this.http.post(this.serverUrl + this.url, user)
      .toPromise()
      .then(resp => resp.json() as User);
  }
}
