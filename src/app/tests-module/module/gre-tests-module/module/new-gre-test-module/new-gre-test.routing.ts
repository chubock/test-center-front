import {Route, RouterModule} from "@angular/router";
import {NewGRETestRouteComponent} from "./NewGRETestRouteComponent";
import {NewGRETestComponent} from "./component/new-gre-test-component/NewGRETestComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const NEW_GRE_TEST_ROUTES:Route[] = [
  {path:'', component: NewGRETestRouteComponent, children: [
    {path: '', component: NewGRETestComponent}
  ]}
];

export const newGRETestRouting = RouterModule.forChild(NEW_GRE_TEST_ROUTES);
