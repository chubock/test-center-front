import {NgModule} from "@angular/core";
import {LoginRouteComponent} from "./login-route.component"
import {loginRoutes} from "./login.routes";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/shared.module";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {ReCaptchaModule} from "angular2-recaptcha";
import {LoginComponent} from "./login.component";
import {LoginService} from "./login.service";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    LoginRouteComponent,
    LoginComponent
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
    loginRoutes
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {

}
