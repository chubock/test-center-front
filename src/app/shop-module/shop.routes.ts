import {Route, RouterModule} from "@angular/router";
import {ShopComponent} from "./shop.component";
import {ShopRouteComponent} from "./shop-route.component";
/**
 * Created by yubar on 2/19/17.
 */

const SHOP_ROUTES: Route[] = [
  {path: '', component: ShopRouteComponent, children: [
    {path: '', component: ShopComponent},
    {path: 'products', loadChildren: 'app/shop-module/products-module/products.module#ProductsModule'},
    {path: 'order', loadChildren: 'app/shop-module/order-module/order.module#OrderModule'}
  ]}
];

export const shopRoutes = RouterModule.forChild(SHOP_ROUTES);
