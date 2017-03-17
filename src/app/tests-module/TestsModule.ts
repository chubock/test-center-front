import {NgModule} from "@angular/core";
import {TestsRouteComponent} from "./TestsRouteComponent"
import {TestsComponent} from "./component/tests-component/TestsComponent";
import {testsRouting} from "./tests.routing";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    TestsRouteComponent,
    TestsComponent
  ],
  imports: [testsRouting],
  exports: [TestsComponent]
})
export class TestsModule {

}
