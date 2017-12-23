import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Student} from "../model/student";
/**
 * Created by Yubar on 4/9/2017.
 */

@Injectable()
export class RegistrationService {

  constructor(private http:Http) {}

  registerPhoneNumber(phoneNumber:string):Promise<Response> {
    return this.http
      .post(environment.apiEndPoint + "/registration-service/register-phone-number/" + phoneNumber, "")
      .toPromise();
  }

  verifyPhoneNumber(phoneNumber:string, code:string):Promise<string> {
    return this.http
      .post(environment.apiEndPoint + "/registration-service/verify-phone-number/" + phoneNumber + "/" + code, "")
      .toPromise()
      .then(resp => resp.json().registrationCode)
  }

  registerStudent(student:Student): Promise<Response> {
    return this.http
      .post(environment.apiEndPoint + "/registration-service/register-student", student)
      .toPromise();
  }


}
