import {Route, RouterModule} from "@angular/router";
import {UserQuestionsRouteComponent} from "./UserQuestionsRouteComponent";
import {UserQuestionsComponent} from "./component/user-questions-component/UserQuestionsComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const USER_QUESTIONS_ROUTES:Route[] = [
  {path:'', component: UserQuestionsRouteComponent , children:[
    {path: '', component: UserQuestionsComponent}
  ]}
];

export const userQuestionsRouting = RouterModule.forChild(USER_QUESTIONS_ROUTES);
