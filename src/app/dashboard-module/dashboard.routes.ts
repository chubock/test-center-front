import {Route, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
/**
 * Created by yubar on 2/19/17.
 */

const DASHBOARD_ROUTES: Route[] = [
  {path: '', component: DashboardComponent},
];

export const dashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
