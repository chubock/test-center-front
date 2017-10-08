import {Injectable} from "@angular/core";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
/**
 * Created by yubar on 9/30/17.
 */

@Injectable()
export class AuthorityService {

  jwtHelper:JwtHelper = new JwtHelper();


  isAuthenticated():boolean {
    return sessionStorage.getItem('token') != null && tokenNotExpired();
  }

  getUser() {
    return this.jwtHelper.decodeToken(sessionStorage.getItem("token"));
  }

  hasAllRoles(...roles:string[]):boolean {

    let decodedToken = this.jwtHelper.decodeToken(sessionStorage.getItem("token"));

    for (let i = 0; i< roles.length; i++)
      if (decodedToken.authorities.indexOf(roles[i]) == -1)
        return false;
    return true;
  }

  hasAnyRole(...roles:string[]):boolean {

    let decodedToken = this.jwtHelper.decodeToken(sessionStorage.getItem("token"));

    for (let i=0; i< roles.length; i++)
      if (decodedToken.authorities.indexOf(roles[i]) != -1)
        return true;
    return false;
  }
}
