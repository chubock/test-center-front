import {Route, RouterModule} from "@angular/router";
import {GREComponent} from "./gre.component";
import {GRERouteComponent} from "./gre-route.component";
/**
 * Created by yubar on 2/19/17.
 */

const GRE_ROUTES: Route[] = [
  {path: '', component: GRERouteComponent, children: [
    {path: '', component: GREComponent},
    {path: 'questions', loadChildren: 'app/gre-module/questions-module/questions.module#QuestionsModule'},
    {path: 'user-questions', loadChildren: 'app/gre-module/user-questions-module/user-questions.module#UserQuestionsModule'},
    {path: 'tests', loadChildren: 'app/gre-module/tests-module/tests.module#TestsModule'}
  ]},
];

export const greRoutes = RouterModule.forChild(GRE_ROUTES);
