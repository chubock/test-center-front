import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./component/login-component/LoginComponent";
import {LoginRouteComponent} from "./LoginRouteComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const LOGIN_ROUTES:Route[] = [
  {path:'', component: LoginRouteComponent , children:[
    {path: '', component: LoginComponent},
  ]}
];

export const loginRouting = RouterModule.forChild(LOGIN_ROUTES);
