import {Route, RouterModule} from "@angular/router";
/**
 * Created by yubar on 2/19/17.
 */

const APP_ROUTES: Route[] = [
  {path:'questions', loadChildren: 'app/questions-module/QuestionsModule#QuestionsModule'}
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
