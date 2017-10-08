import {NgModule} from "@angular/core";
import {ProductsRouteComponent} from "./products-route.component"
import {productsRoutes} from "./products.routing";
import {ProductComponent} from "./component/product-component/product.component";
import {ProductService} from "./service/product.service";
import {CommonModule} from "@angular/common";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {ProductsComponent} from "./products.component";
import {SharedModule} from "../../shared-module/shared.module";
import {AuthHttp} from "angular2-jwt";
import {authHttpServiceFactory} from "../../shared-module/service/auth-http-service.factory";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    ProductsRouteComponent,
    ProductsComponent,
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
    productsRoutes
  ],
  providers: [
    ProductService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class ProductsModule {

}
