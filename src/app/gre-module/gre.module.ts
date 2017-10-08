import {NgModule} from "@angular/core";
import {GREComponent} from "./gre.component";
import {greRoutes} from "./gre.routes";
import {GRERouteComponent} from "./gre-route.component";

@NgModule({
  declarations: [
    GRERouteComponent,
    GREComponent
  ],
  imports: [
    greRoutes
  ]
})
export class GREModule { }
