import {Component} from '@angular/core';
import {LoginService} from "../login-module/login.service";
import {Router} from "@angular/router";

@Component({templateUrl: './dashboard.component.html'})
export class DashboardComponent {

  constructor(private loginService:LoginService, private router:Router) {};

  logout():void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
