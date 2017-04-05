import {Route, RouterModule} from "@angular/router";
import {ShoppingComponent} from "./component/shopping-component/ShoppingComponent";
import {ShoppingRouteComponent} from "./ShoppingRouteComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const SHOPPING_ROUTES:Route[] = [
  {path:'', component: ShoppingRouteComponent , children:[
    {path: '', component: ShoppingComponent},
  ]}
];

export const shoppingRouting = RouterModule.forChild(SHOPPING_ROUTES);
