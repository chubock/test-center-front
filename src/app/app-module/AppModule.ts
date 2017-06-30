
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared-module/SharedModule";
import {FileService} from "../shared-module/service/FileService";
import {AlertsService} from "../shared-module/service/AlertsService";
import {AppComponent} from "./component/AppComponent";
import {appRouting} from "./app.routing";
import {AppRouteComponent} from "./AppRouteComponent";
import {LoginService} from "../login-module/service/LoginService";

@NgModule({
  declarations: [
    AppRouteComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    appRouting
  ],
  providers: [
    LoginService,
    FileService,
    AlertsService,
  ],
  bootstrap: [AppRouteComponent]
})
export class AppModule { }
