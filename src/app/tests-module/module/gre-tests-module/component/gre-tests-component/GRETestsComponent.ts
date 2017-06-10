import {Component, OnInit} from "@angular/core";
import {Test} from "../../../../model/Test";
import {GRETestService} from "../../service/GRETestService";
import {LoginService} from "../../../../../login-module/service/LoginService";
import {User} from "../../../../../registration-module/model/User";
/**
 * Created by yubar on 2/19/17.
 */

@Component({
  selector: 'gre-tests-manager',
  templateUrl: './gre-tests-component.html'
})
export class GRETestsComponent implements OnInit {
  user:User;
  tests:Test[] = [];

  constructor(private testService:GRETestService, private loginService:LoginService){}

  ngOnInit():void {
    this.testService.getTests().then(tests => this.tests = tests);
    this.user = this.loginService.getUser();
  }

}
