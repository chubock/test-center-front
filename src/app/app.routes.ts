import {Route, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
/**
 * Created by yubar on 2/19/17.
 */

const APP_ROUTES: Route[] = [
  {path: '', component: AppComponent},
  {path:'portal', loadChildren: 'app/portal-module/portal.module#PortalModule'},
  {path:'dashboard', loadChildren: 'app/dashboard-module/dashboard.module#DashboardModule'},
  {path:'gre', loadChildren: 'app/gre-module/gre.module#GREModule'},
  {path:'shop', loadChildren: 'app/shop-module/shop.module#ShopModule'},
  {path:'registration', loadChildren: 'app/registration-module/registration.module#RegistrationModule'},
  {path:'login', loadChildren: 'app/login-module/login.module#LoginModule'},
];

export const appRoutes = RouterModule.forRoot(APP_ROUTES);
