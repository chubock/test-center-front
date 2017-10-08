import {NgModule} from "@angular/core";
import {TestsRouteComponent} from "./tests-route.component"
import {testsRouting} from "./tests.routes";
import {GRETestsComponent} from "./component/gre-tests-component/GRETestsComponent";
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
import {Http, RequestOptions} from "@angular/http";
import {authHttpServiceFactory} from "../../shared-module/service/auth-http-service.factory";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    TestsRouteComponent,
    TestsComponent,
    GRETestsComponent,
    GRETestComponent,
    NewGRETestComponent
  ],
  imports: [
    testsRouting,
    CommonModule,
    AnswerQuestionModule,
    ChartModule,
    CarouselModule
  ],
  providers: [
    GRETestService,
    GRETestResultService,
    AuthorityService
  ]
})
export class TestsModule {

}
