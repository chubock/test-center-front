import {NgModule} from "@angular/core";
import {ShoppingRouteComponent} from "./ShoppingRouteComponent"
import {ShoppingComponent} from "./component/shopping-component/ShoppingComponent";
import {shoppingRouting} from "./shopping.routing";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ButtonsModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared-module/SharedModule";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {EditorModule} from "primeng/components/editor/editor";
import {OrderService} from "./service/OrderService";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    ShoppingRouteComponent,
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ButtonsModule.forRoot(),
    PrimeSharedModule,
    EditorModule,
    SharedModule,
    shoppingRouting
  ],
  providers: [OrderService]
})
export class ShoppingModule {

}
