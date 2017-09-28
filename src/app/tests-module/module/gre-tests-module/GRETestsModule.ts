import {NgModule} from "@angular/core";
import {GRETestsRouteComponent} from "./GRETestsRouteComponent"
import {GRETestsComponent} from "./component/gre-tests-component/GRETestsComponent";
import {greTestsRouting} from "./gre-tests.routing";
import {GRETestService} from "./service/GRETestService";
import {CommonModule} from "@angular/common";
import {GRETestComponent} from "./component/gre-test-component/GRETestComponent";
import {AnswerQuestionModule} from "./module/answer-question-module/AnswerQuestionModule";
import {LoginService} from "../../../login-module/service/LoginService";
import {GRETestResultsComponent} from "./component/gre-test-results-component/GRETestResultsComponent";
import {GRETestResultService} from "./service/GRETestResultService";
import {ChartModule} from "primeng/primeng";
import {CarouselModule} from "ng2-bootstrap";

/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    GRETestsRouteComponent,
    GRETestResultsComponent,
    GRETestsComponent,
    GRETestComponent
  ],
  imports: [
    CommonModule,
    AnswerQuestionModule,
    ChartModule,
    CarouselModule,
    greTestsRouting
  ],
  providers: [GRETestService, GRETestResultService, LoginService]
})
export class GRETestsModule {

}
