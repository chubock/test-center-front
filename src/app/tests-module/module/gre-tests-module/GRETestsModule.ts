import {NgModule} from "@angular/core";
import {GRETestsRouteComponent} from "./GRETestsRouteComponent"
import {GRETestsComponent} from "./component/gre-tests-component/GRETestsComponent";
import {greTestsRouting} from "./gre-tests.routing";
import {GRETestService} from "./service/GRETestService";
import {CommonModule} from "@angular/common";
import {GRETestComponent} from "./component/gre-test-component/GRETestComponent";
import {AnswerQuestionModule} from "./module/answer-question-module/AnswerQuestionModule";
import {LoginService} from "../../../login-module/service/LoginService";

/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    GRETestsRouteComponent,
    GRETestsComponent,
    GRETestComponent
  ],
  imports: [
    CommonModule,
    AnswerQuestionModule,
    greTestsRouting
  ],
  providers: [GRETestService, LoginService]
})
export class GRETestsModule {

}
