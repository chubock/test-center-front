import {NgModule} from "@angular/core";
import {GRETestsRouteComponent} from "./GRETestsRouteComponent"
import {GRETestsComponent} from "./component/gre-tests-component/GRETestsComponent";
import {greTestsRouting} from "./gre-tests.routing";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    GRETestsRouteComponent,
    GRETestsComponent
  ],
  imports: [greTestsRouting],
  exports: [GRETestsComponent]
})
export class GRETestsModule {

}
