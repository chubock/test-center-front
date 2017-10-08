import {Route, RouterModule} from "@angular/router";
import {ProductsRouteComponent} from "./products-route.component";
import {ProductComponent} from "./component/product-component/product.component";
import {ProductsComponent} from "./products.component";
/**
 * Created by yubar on 2/19/17.
 */

export const PRODUCTS_ROUTES:Route[] = [
  {path:'', component: ProductsRouteComponent , children:[
    {path: '', component: ProductsComponent},
    {path: 'new', component: ProductComponent},
    {path: ':id', component: ProductComponent},
  ]}
];

export const productsRoutes = RouterModule.forChild(PRODUCTS_ROUTES);
