import {Route, RouterModule} from "@angular/router";
import {AppComponent} from "./component/AppComponent";
/**
 * Created by yubar on 2/19/17.
 */

const APP_ROUTES: Route[] = [
  {path: '', component: AppComponent},
  {path:'questions', loadChildren: 'app/questions-module/QuestionsModule#QuestionsModule'},
  {path:'tests', loadChildren: 'app/tests-module/TestsModule#TestsModule'},
  {path:'products', loadChildren: 'app/products-module/ProductsModule#ProductsModule'},
  {path:'shopping', loadChildren: 'app/shopping-module/ShoppingModule#ShoppingModule'},
  {path:'registration', loadChildren: 'app/registration-module/RegistrationModule#RegistrationModule'},
  {path:'login', loadChildren: 'app/login-module/LoginModule#LoginModule'}
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
