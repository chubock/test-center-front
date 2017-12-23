import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/shared.module";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {ReCaptchaModule} from "angular2-recaptcha";
import {dashboardRoutes} from "./dashboard.routes";
import {DashboardRouteComponent} from "./dashboard-route.component";
import {DashboardComponent} from "./dashboard.component";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    DashboardRouteComponent,
    DashboardComponent
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
    dashboardRoutes
  ]
})
export class DashboardModule {

}
