
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {NgModule} from "@angular/core";
import {SharedModule} from "./shared-module/shared.module";
import {FileService} from "./shared-module/service/file.service";
import {AlertsService} from "./shared-module/service/alerts.service";
import {AppComponent} from "./app.component";
import {appRoutes} from "./app.routes";
import {AppRouteComponent} from "./app-route.component";
import {ChartModule} from "primeng/primeng";
import {AuthorityService} from "./shared-module/service/authority.service";
import {authHttpServiceFactory} from "./shared-module/service/auth-http-service.factory";
import {AuthHttp} from "angular2-jwt";
import {LoginService} from "./login-module/login.service";

@NgModule({
  declarations: [
    AppRouteComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    SharedModule,
    appRoutes
  ],
  providers: [
    FileService,
    LoginService,
    AlertsService,
    AuthorityService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppRouteComponent]
})
export class AppModule { }
