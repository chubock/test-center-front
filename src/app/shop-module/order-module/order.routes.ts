import {Route, RouterModule} from "@angular/router";
import {OrderRouteComponent} from "./order-route.component";
import {ProductComponent} from "./component/product-component/product.component";
import {ShoppingCardComponent} from "./component/shopping-card-component/shopping-card.component";
import {OrderComponent} from "./order.component";
/**
 * Created by yubar on 2/19/17.
 */

export const ORDER_ROUTES:Route[] = [
  {path:'', component: OrderRouteComponent , children:[
    {path: '', component: OrderComponent},
    {path: 'card', component: ShoppingCardComponent},
    {path: ':id', component: ProductComponent},
  ]}
];

export const orderRoutes = RouterModule.forChild(ORDER_ROUTES);
