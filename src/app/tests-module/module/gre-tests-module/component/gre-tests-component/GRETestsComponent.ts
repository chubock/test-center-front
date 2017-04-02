import {Component, OnInit} from "@angular/core";
import {Test} from "../../../../model/Test";
import {GRETestService} from "../../service/GRETestService";
/**
 * Created by yubar on 2/19/17.
 */

@Component({
  selector: 'gre-tests-manager',
  templateUrl: './gre-tests-component.html'
})
export class GRETestsComponent implements OnInit {
  tests:Test[] = [];

  constructor(private testService:GRETestService){}

  ngOnInit():void {
    this.testService.getTests().then(tests => this.tests = tests);
  }

}
