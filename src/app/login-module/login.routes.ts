import {Route, RouterModule} from "@angular/router";
import {LoginRouteComponent} from "./login-route.component";
import {LoginComponent} from "./login.component";
/**
 * Created by yubar on 2/19/17.
 */

export const LOGIN_ROUTES:Route[] = [
  {path:'', component: LoginRouteComponent , children:[
    {path: '', component: LoginComponent},
  ]}
];

export const loginRoutes = RouterModule.forChild(LOGIN_ROUTES);
