/**
 * Created by yubar on 9/30/17.
 */

import {Component, OnInit} from "@angular/core";
import {RegistrationService} from "../../service/registration.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertsService} from "../../../shared-module/service/alerts.service";
import {Alert} from "../../../shared-module/model/alert";
@Component({
  templateUrl: './verify-phone.component.html',
  styleUrls: ['../../../../assets/css/login.css']
})
export class VerifyPhoneComponent implements OnInit{

  phoneNumber:string;
  verificationCode:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private registrationService:RegistrationService,
    private alertsService:AlertsService
  ) {}

  ngOnInit(): void {
    this.phoneNumber = this.activatedRoute.snapshot.params['phoneNumber'];
  }

  verify(): void {
    this.registrationService
      .verifyPhoneNumber(this.phoneNumber, this.verificationCode)
      .then(
        registrationCode => this.router.navigate(["registration", "register-student", this.phoneNumber, registrationCode]),
        error => this.alertsService.newAlert(new Alert(error.json().code + ' ' + error.json().message, 'danger'))
      );
  }

  resendVerificationCode():void {
    let phoneNumber:string = this.activatedRoute.snapshot.params['phoneNumber'];
    this.registrationService
      .registerPhoneNumber(phoneNumber)
      .catch(error => this.alertsService.newAlert(new Alert(error.json().code + ' ' + error.json().message, 'danger')))
  }
}
