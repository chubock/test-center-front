import {Route, RouterModule} from "@angular/router";
import {QuestionsComponent} from "./component/questions-component/QuestionsComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const QUESTIONS_ROUTES:Route[] = [
  {path:'', component: QuestionsComponent , children:[
    {path:'gre',loadChildren: 'app/questions-module/module/gre-questions-module/GREQuestionsModule#GREQuestionsModule'}
  ]}
];

export const questionsRouting = RouterModule.forChild(QUESTIONS_ROUTES);
