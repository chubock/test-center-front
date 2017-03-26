import {NgModule} from "@angular/core";
import {QuestionsRouteComponent} from "./QuestionsRouteComponent"
import {QuestionsComponent} from "./component/questions-component/QuestionsComponent";
import {questionsRouting} from "./questions.routing";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    QuestionsRouteComponent,
    QuestionsComponent
  ],
  imports: [questionsRouting]
})
export class QuestionsModule {

}
