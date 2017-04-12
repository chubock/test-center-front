import {NgModule} from "@angular/core";
import {RegistrationRouteComponent} from "./RegistrationRouteComponent"
import {RegistrationComponent} from "./component/registration-component/RegistrationComponent";
import {registrationRouting} from "./registration.routing";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/SharedModule";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {RegistrationService} from "./service/RegistrationService";
import {ReCaptchaModule} from "angular2-recaptcha";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    RegistrationRouteComponent,
    RegistrationComponent
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
    registrationRouting
  ],
  providers: [RegistrationService]
})
export class RegistrationModule {

}
