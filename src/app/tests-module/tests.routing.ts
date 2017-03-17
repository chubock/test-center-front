import {Route, RouterModule} from "@angular/router";
import {TestsComponent} from "./component/tests-component/TestsComponent";
import {TestsRouteComponent} from "./TestsRouteComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const TESTS_ROUTES:Route[] = [
  {path:'', component: TestsRouteComponent , children:[
    {path: '', component: TestsComponent},
    {path:'gre',loadChildren: 'app/tests-module/module/gre-test-module/GRETestModule#GRETestModule'}
  ]}
];

export const testsRouting = RouterModule.forChild(TESTS_ROUTES);
