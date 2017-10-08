/**
 * Created by yubar on 9/30/17.
 */

import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {RegistrationService} from "../../service/registration.service";
import {User} from "../../model/user";
import {Student} from "../../model/student";
import {AlertsService} from "../../../shared-module/service/alerts.service";
import {Alert} from "../../../shared-module/model/alert";
@Component({
  templateUrl: './register-student.component.html'
})
export class RegisterStudentComponent {
  student:Student = new Student();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private registrationService:RegistrationService,
    private alertsService:AlertsService
  ) {}

  registerStudent():void {
    this.student.phoneNumber = this.activatedRoute.snapshot.params['phoneNumber'];
    this.student.registrationCode = this.activatedRoute.snapshot.params['registrationCode'];
    this.registrationService
      .registerStudent(this.student)
      .then(
        () => {
          this.alertsService.newAlert(new Alert("Registration Completed"));
          this.router.navigate(["/"]);
        },
        error => this.alertsService.newAlert(new Alert(error.json().code + ' ' + error.json().message, 'danger'))
      );
  }
}
