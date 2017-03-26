import {NgModule} from "@angular/core";
import {NewGRETestComponent} from "./component/new-gre-test-component/NewGRETestComponent";
import {newGRETestRouting} from "./new-gre-test.routing";
import {NewGRETestRouteComponent} from "./NewGRETestRouteComponent";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {GRETestService} from "../../service/GRETestService";
import {AnswerQuestionModule} from "../answer-question-module/AnswerQuestionModule";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {ButtonsModule} from "ng2-bootstrap";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    NewGRETestRouteComponent,
    NewGRETestComponent
  ],
  imports: [
    newGRETestRouting,
    CommonModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    PrimeSharedModule,
    AnswerQuestionModule,
  ],
  providers: [GRETestService]
})
export class NewGRETestModule {

}
