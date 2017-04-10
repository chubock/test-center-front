import {Route, RouterModule} from "@angular/router";
import {RegistrationComponent} from "./component/registration-component/RegistrationComponent";
import {RegistrationRouteComponent} from "./RegistrationRouteComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const REGISTRATION_ROUTES:Route[] = [
  {path:'', component: RegistrationRouteComponent , children:[
    {path: '', component: RegistrationComponent},
  ]}
];

export const registrationRouting = RouterModule.forChild(REGISTRATION_ROUTES);
