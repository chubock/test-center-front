import {Route, RouterModule} from "@angular/router";
import {GRETestsComponent} from "./component/gre-tests-component/GRETestsComponent";
import {GRETestsRouteComponent} from "./GRETestsRouteComponent";
import {GRETestComponent} from "./component/gre-test-component/GRETestComponent";
import {GRETestResultsComponent} from "./component/gre-test-results-component/GRETestResultsComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const GRE_TESTS_ROUTES:Route[] = [
  {path:'', component: GRETestsRouteComponent , children:[
    {path: '', component: GRETestsComponent},
    {path: 'result/:id', component: GRETestResultsComponent},
    {path: 'view/:id', component: GRETestComponent},
    {path: 'new', loadChildren: 'app/tests-module/module/gre-tests-module/module/new-gre-test-module/NewGRETestModule#NewGRETestModule'}
  ]}
];

export const greTestsRouting = RouterModule.forChild(GRE_TESTS_ROUTES);
