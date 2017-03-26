import {Route, RouterModule} from "@angular/router";
import {AppComponent} from "./component/AppComponent";
/**
 * Created by yubar on 2/19/17.
 */

const APP_ROUTES: Route[] = [
  {path: '', component: AppComponent},
  {path:'questions', loadChildren: 'app/questions-module/QuestionsModule#QuestionsModule'},
  {path:'tests', loadChildren: 'app/tests-module/TestsModule#TestsModule'}
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
