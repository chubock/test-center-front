import {NgModule} from "@angular/core";
import {UserQuestionsRouteComponent} from "./UserQuestionsRouteComponent";
import {UserQuestionsComponent} from "./component/user-questions-component/UserQuestionsComponent";
import {userQuestionsRouting} from "./user-questions.routing";
import {UserQuestionsService} from "./service/UserQuestionsService";
import {AnswerQuestionModule} from "../tests-module/module/gre-tests-module/module/answer-question-module/AnswerQuestionModule";
import {ButtonsModule, PaginationModule} from "ng2-bootstrap";
import {SharedModule} from "../shared-module/SharedModule";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CheckboxModule, EditorModule, RadioButtonModule} from "primeng/primeng";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {LoginService} from "../login-module/service/LoginService";

/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    UserQuestionsRouteComponent,
    UserQuestionsComponent
  ],
  imports: [
    userQuestionsRouting,
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
    LoginService
  ]
})
export class UserQuestionsModule {

}
