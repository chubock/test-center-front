import {Route, RouterModule} from "@angular/router";
import {RegistrationRouteComponent} from "./registration-route.component";
import {RegisterPhoneComponent} from "./component/register-phone-component/register-phone.component";
import {VerifyPhoneComponent} from "./component/verify-phone-component/verify-phone.component";
import {RegisterStudentComponent} from "./component/register-student-component/register-student.component";
/**
 * Created by yubar on 2/19/17.
 */

export const REGISTRATION_ROUTES:Route[] = [
  {path:'', component: RegistrationRouteComponent , children:[
    {path: '', redirectTo: 'register-phone'},
    {path: 'register-phone', component: RegisterPhoneComponent},
    {path: 'verify-phone/:phoneNumber', component: VerifyPhoneComponent},
    {path: 'register-student/:phoneNumber/:registrationCode', component: RegisterStudentComponent}
  ]}
];

export const registrationRoutes = RouterModule.forChild(REGISTRATION_ROUTES);
