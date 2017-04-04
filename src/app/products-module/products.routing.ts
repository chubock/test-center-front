import {Route, RouterModule} from "@angular/router";
import {ProductsComponent} from "./component/products-component/ProductsComponent";
import {ProductsRouteComponent} from "./ProductsRouteComponent";
import {ProductComponent} from "./component/product-component/ProductComponent";
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

export const productsRouting = RouterModule.forChild(PRODUCTS_ROUTES);
