import {Route, RouterModule} from "@angular/router";
import {GRETestComponent} from "./component/gre-tests-component/GRETestsComponent";
import {GRETestRouteComponent} from "./GRETestsRouteComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const GRE_TESTS_ROUTES: Route[] = [
  {path: '', component: GRETestsRouteComponent, children: [
    {path: '', component: GRETestsComponent}
  ]}
];

export const greTestsRouting = RouterModule.forChild(GRE_TESTS_ROUTES);
