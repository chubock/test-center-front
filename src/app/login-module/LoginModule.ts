import {NgModule} from "@angular/core";
import {LoginRouteComponent} from "./LoginRouteComponent"
import {LoginComponent} from "./component/login-component/LoginComponent";
import {loginRouting} from "./login.routing";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/SharedModule";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {LoginService} from "./service/LoginService";
import {Base64Service} from "./service/Base64Service";
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
    SharedModule,
    loginRouting
  ],
  providers: [LoginService, Base64Service]
})
export class LoginModule {

}
