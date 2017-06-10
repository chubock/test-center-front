import {Component} from '@angular/core';
import {apiEndPoint} from "../../AppConfig";
import {LoginService} from "../../login-module/service/LoginService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  serverUrl:string = apiEndPoint;

  constructor(public loginService:LoginService){}
}
