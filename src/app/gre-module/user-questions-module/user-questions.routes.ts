import {Route, RouterModule} from "@angular/router";
import {UserQuestionsRouteComponent} from "./user-questions-route.component";
import {UserQuestionsComponent} from "./user-questions.component";
/**
 * Created by yubar on 2/19/17.
 */

export const USER_QUESTIONS_ROUTES:Route[] = [
  {path:'', component: UserQuestionsRouteComponent , children:[
    {path: '', component: UserQuestionsComponent}
  ]}
];

export const userQuestionsRoutes = RouterModule.forChild(USER_QUESTIONS_ROUTES);
