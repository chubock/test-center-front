/**
 * Created by yubar on 9/30/17.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {RegistrationService} from "../../service/registration.service";
import {AlertsService} from "../../../shared-module/service/alerts.service";
import {Alert} from "../../../shared-module/model/alert";
@Component({
  templateUrl: './register-phone.component.html'
})
export class RegisterPhoneComponent {
  phoneNumber:string;

  constructor(
    private router:Router,
    private registrationService:RegistrationService,
    private alertsService:AlertsService
  ) {}

  registerPhoneNumber():void {
    this.registrationService
      .registerPhoneNumber(this.phoneNumber)
      .then(
        () => this.router.navigate(["registration", "verify-phone", this.phoneNumber]),
        error => this.alertsService.newAlert(new Alert(error.json().code + ' ' + error.json().message, 'danger'))
      );
  }
}
