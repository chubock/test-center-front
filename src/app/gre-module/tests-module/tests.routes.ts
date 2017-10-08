import {Route, RouterModule} from "@angular/router";
import {TestsRouteComponent} from "./tests-route.component";
import {GRETestResultsComponent} from "./component/gre-test-results-component/GRETestResultsComponent";
import {GRETestComponent} from "./component/gre-test-component/GRETestComponent";
import {TestsComponent} from "./tests.component";
import {NewGRETestComponent} from "./component/new-gre-test-component/NewGRETestComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const TESTS_ROUTES:Route[] = [
  {path:'', component: TestsRouteComponent , children:[
    {path: '', component: TestsComponent},
    {path: 'result/:id', component: GRETestResultsComponent},
    {path: 'view/:id', component: GRETestComponent},
    {path: 'new', component: NewGRETestComponent}
  ]}
];

export const testsRouting = RouterModule.forChild(TESTS_ROUTES);
