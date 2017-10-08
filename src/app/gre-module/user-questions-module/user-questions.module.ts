import {NgModule} from "@angular/core";
import {UserQuestionsRouteComponent} from "./user-questions-route.component";
import {UserQuestionsComponent} from "./user-questions.component";
import {userQuestionsRoutes} from "./user-questions.routes";
import {UserQuestionsService} from "./user-questions.service";
import {ButtonsModule, PaginationModule} from "ng2-bootstrap";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {CheckboxModule, EditorModule, RadioButtonModule} from "primeng/primeng";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {SharedModule} from "../../shared-module/shared.module";
import {AnswerQuestionModule} from "../answer-question-module/answer-question.module";
import {AuthorityService} from "../../shared-module/service/authority.service";
import {AuthHttp} from "angular2-jwt";
import {authHttpServiceFactory} from "../../shared-module/service/auth-http-service.factory";

/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    UserQuestionsRouteComponent,
    UserQuestionsComponent
  ],
  imports: [
    userQuestionsRoutes,
    AnswerQuestionModule,
    SharedModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RadioButtonModule,
    CheckboxModule,
    EditorModule,
    PrimeSharedModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),

  ],
  providers: [
    UserQuestionsService,
    AuthorityService
  ]
})
export class UserQuestionsModule {

}
