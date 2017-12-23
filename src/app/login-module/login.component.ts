import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {AlertsService} from "../shared-module/service/alerts.service";
import {Alert} from "../shared-module/model/alert";
import {AuthorityService} from "../shared-module/service/authority.service";
/**
 * Created by Yubar on 4/9/2017.
 */

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/login.css']
})
export class LoginComponent {

  username:string;
  password:string;

  constructor(
    private router:Router,
    private loginService:LoginService,
    private alertsService:AlertsService,
    public authorityService:AuthorityService
  ) {}

  login():void {
    this.loginService.login(this.username, this.password).then(user => {
      this.alertsService.newAlert(new Alert("Login Successfully"));
      this.router.navigate(['portal']);
    }, reason => {
      this.alertsService.newAlert(new Alert(reason.json().message, "danger"))
    });
  }

  logout():void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
