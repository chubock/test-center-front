import {NgModule} from "@angular/core";
import {RegistrationRouteComponent} from "./registration-route.component"
import {registrationRoutes} from "./registration.routes";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/shared.module";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {RegistrationService} from "./service/registration.service";
import {ReCaptchaModule} from "angular2-recaptcha";
import {RegisterPhoneComponent} from "./component/register-phone-component/register-phone.component";
import {VerifyPhoneComponent} from "./component/verify-phone-component/verify-phone.component";
import {RegisterStudentComponent} from "./component/register-student-component/register-student.component";

/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    RegistrationRouteComponent,
    RegisterPhoneComponent,
    VerifyPhoneComponent,
    RegisterStudentComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ButtonsModule.forRoot(),
    PrimeSharedModule,
    EditorModule,
    ReCaptchaModule,
    SharedModule,
    registrationRoutes
  ],
  providers: [RegistrationService]
})
export class RegistrationModule {

}
