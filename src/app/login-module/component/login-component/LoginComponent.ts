import {Component, OnInit, VERSION} from "@angular/core";
import {User} from "../../../registration-module/model/User";
import {LoginService} from "../../service/LoginService";
import {Router} from "@angular/router";
import {AlertsService} from "../../../shared-module/service/AlertsService";
import {Alert} from "../../../shared-module/model/Alert";
import {tokenNotExpired} from "angular2-jwt";
/**
 * Created by Yubar on 4/9/2017.
 */

@Component({
  selector: 'login-component',
  templateUrl: './login-component.html'
})
export class LoginComponent {

  loggedIn:boolean = tokenNotExpired();
  username:string = "";
  password:string = "";

  constructor(private router:Router, private loginService:LoginService, private alertsService:AlertsService) {
  }

  login():void {
    this.loginService.login(this.username, this.password).then(user => {
      this.router.navigate(['/']);
    }, reason => {
      this.alertsService.newAlert(new Alert(reason.json().message, "danger"))
    });
  }

  logout():void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
