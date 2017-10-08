import {NgModule} from "@angular/core";
import {ShopComponent} from "./shop.component";
import {shopRoutes} from "./shop.routes";
import {ShopRouteComponent} from "./shop-route.component";

@NgModule({
  declarations: [
    ShopRouteComponent,
    ShopComponent
  ],
  imports: [shopRoutes],
})
export class ShopModule { }
