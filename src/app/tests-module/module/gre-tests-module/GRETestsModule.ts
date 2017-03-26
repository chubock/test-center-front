import {NgModule} from "@angular/core";
import {GRETestsRouteComponent} from "./GRETestsRouteComponent"
import {GRETestsComponent} from "./component/gre-tests-component/GRETestsComponent";
import {greTestsRouting} from "./gre-tests.routing";
import {GRETestService} from "./service/GRETestService";
import {CommonModule} from "@angular/common";

/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    GRETestsRouteComponent,
    GRETestsComponent
  ],
  imports: [
    greTestsRouting
  ],
  providers: [GRETestService]
})
export class GRETestsModule {

}
