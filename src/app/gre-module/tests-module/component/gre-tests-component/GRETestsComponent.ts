import {Component, OnInit} from "@angular/core";
import {GRETestService} from "../../service/gre-test.service";
import {User} from "../../../../registration-module/model/user";
import {Test} from "../../model/Test";
import {AuthorityService} from "../../../../shared-module/service/authority.service";
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

  constructor(private testService:GRETestService, private authorityService:AuthorityService){}

  ngOnInit():void {
    this.testService.getTests().then(tests => this.tests = tests);
    this.user = this.authorityService.getUser();
  }

}
