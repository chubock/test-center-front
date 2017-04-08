import {Route, RouterModule} from "@angular/router";
import {ShoppingComponent} from "./component/shopping-component/ShoppingComponent";
import {ShoppingRouteComponent} from "./ShoppingRouteComponent";
import {ProductComponent} from "./component/product-component/ProductComponent";
import {ShoppingCardComponent} from "./component/shopping-card-component/ShoppingCardComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const SHOPPING_ROUTES:Route[] = [
  {path:'', component: ShoppingRouteComponent , children:[
    {path: '', component: ShoppingComponent},
    {path: 'card', component: ShoppingCardComponent},
    {path: ':id', component: ProductComponent},
  ]}
];

export const shoppingRouting = RouterModule.forChild(SHOPPING_ROUTES);
