import {Component} from "@angular/core";
import {User} from "../../model/User";
import {RegistrationService} from "../../service/RegistrationService";
/**
 * Created by Yubar on 4/9/2017.
 */

@Component({
  selector: 'registration-component',
  templateUrl: './registration-component.html'
})
export class RegistrationComponent {

  user:User = new User();
  uniqueUsername:boolean = true;
  confirmPassword:string;
  captchaValid:boolean = false;

  constructor(private registrationService:RegistrationService) {}

  checkUsername():void {
    this.registrationService.isUsernameUnique(this.user.username).then(unique => {
      this.uniqueUsername = unique;
    });
  }

  handleCorrectCaptcha(token:string):void {
    this.captchaValid = true;
  }

  register():void {
    this.registrationService.register(this.user).then(user => this.user = user);
  }

}
