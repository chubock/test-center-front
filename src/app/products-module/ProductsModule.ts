import {NgModule} from "@angular/core";
import {ProductsRouteComponent} from "./ProductsRouteComponent"
import {ProductsComponent} from "./component/products-component/ProductsComponent";
import {productsRouting} from "./products.routing";
import {ProductComponent} from "./component/product-component/ProductComponent";
import {ProductService} from "./service/ProductService";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/SharedModule";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
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
    productsRouting
  ],
  providers: [ProductService]
})
export class ProductsModule {

}
