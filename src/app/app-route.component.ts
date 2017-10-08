import {Component} from "@angular/core";
/**
 * Created by Yubar on 3/2/2017.
 */


@Component({
  selector: 'app-route',
  template: `
    <alerts-component></alerts-component>
    <router-outlet></router-outlet>
  `
})
export class AppRouteComponent {}
