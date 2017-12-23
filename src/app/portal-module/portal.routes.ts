import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {PortalRouteComponent} from "./portal-route.component";

const PORTAL_ROUTES: Route[] =[
    { path: '',               component: PortalRouteComponent, children: [
      { path: '',                   redirectTo: 'dashboard' },
      { path: 'dashboard',          component: HomeComponent },
      { path: 'questions',          loadChildren: 'app/gre-module/questions-module/questions.module#QuestionsModule' },
      { path: 'user-questions',     loadChildren: 'app/gre-module/user-questions-module/user-questions.module#UserQuestionsModule' },
      { path: 'user',               component: UserComponent },
      { path: 'table',              component: TablesComponent },
      { path: 'typography',         component: TypographyComponent },
      { path: 'icons',              component: IconsComponent },
      { path: 'maps',               component: MapsComponent },
      { path: 'notifications',      component: NotificationsComponent },
      { path: 'upgrade',            component: UpgradeComponent }
    ] },
];

export const portalRoutes = RouterModule.forChild(PORTAL_ROUTES);
