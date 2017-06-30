import {Component} from '@angular/core';
import {LoginService} from "../../login-module/service/LoginService";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  serverUrl:string = environment.apiEndPoint;

  constructor(public loginService:LoginService){
  }
}
