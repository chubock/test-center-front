import {NgModule} from "@angular/core";
import {TestsRouteComponent} from "./tests-route.component"
import {testsRouting} from "./tests.routes";
import {GRETestComponent} from "./component/gre-test-component/GRETestComponent";
import {GRETestResultService} from "./service/gre-test-result.service";
import {GRETestService} from "./service/gre-test.service";
import {ChartModule} from "primeng/primeng";
import {CommonModule} from "@angular/common";
import {CarouselModule} from "ng2-bootstrap";
import {TestsComponent} from "./tests.component";
import {NewGRETestComponent} from "./component/new-gre-test-component/NewGRETestComponent";
import {AnswerQuestionModule} from "../answer-question-module/answer-question.module";
import {AuthorityService} from "../../shared-module/service/authority.service";
import {GRETestResultsComponent} from "./component/gre-test-results-component/GRETestResultsComponent";
import {SharedModule} from "../../shared-module/shared.module";
import {FormsModule} from "@angular/forms";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    TestsRouteComponent,
    TestsComponent,
    GRETestComponent,
    GRETestResultsComponent,
    NewGRETestComponent
  ],
  imports: [
    testsRouting,
    CommonModule,
    AnswerQuestionModule,
    ChartModule,
    CarouselModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    GRETestService,
    GRETestResultService,
    AuthorityService
  ]
})
export class TestsModule {

}
