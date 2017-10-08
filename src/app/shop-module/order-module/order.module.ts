import {NgModule} from "@angular/core";
import {OrderRouteComponent} from "./order-route.component"
import {orderRoutes} from "./order.routes";
import {CommonModule} from "@angular/common";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {OrderService} from "./service/order.service";
import {ProductComponent} from "./component/product-component/product.component";
import {ShoppingCardComponent} from "./component/shopping-card-component/shopping-card.component";
import {SharedModule} from "../../shared-module/shared.module";
import {OrderComponent} from "./order.component";
import {authHttpServiceFactory} from "../../shared-module/service/auth-http-service.factory";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    OrderRouteComponent,
    OrderComponent,
    ShoppingCardComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ButtonsModule.forRoot(),
    PrimeSharedModule,
    EditorModule,
    SharedModule,
    orderRoutes
  ],
  providers: [
    OrderService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class OrderModule {

}
