import {Route, RouterModule} from "@angular/router";
import {GRETestsComponent} from "./component/gre-tests-component/GRETestsComponent";
import {GRETestsRouteComponent} from "./GRETestsRouteComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const GRE_TESTS_ROUTES:Route[] = [
  {path:'', component: GRETestsRouteComponent , children:[
    {path: '', component: GRETestsComponent},
    {path: 'new', loadChildren: 'app/tests-module/module/gre-tests-module/module/new-gre-test-module/NewGRETestModule#NewGRETestModule'}
  ]}
];

export const greTestsRouting = RouterModule.forChild(GRE_TESTS_ROUTES);
