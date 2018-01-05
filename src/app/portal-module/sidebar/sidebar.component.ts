import { Component, OnInit } from '@angular/core';
import {AuthorityService} from "../../shared-module/service/authority.service";

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    roles: string[];
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '', roles: ['STUDENT'] },
    { path: 'questions', title: 'Questions',  icon: 'pe-7s-pen', class: '', roles: ['GRE_CONTENT'] },
    { path: 'user-questions', title: 'Answered Questions',  icon: 'pe-7s-pen', class: '', roles: ['GRE_TEACHER', 'STUDENT'] },
    { path: 'user', title: 'User Profile',  icon:'pe-7s-user', class: '' , roles: ['STUDENT']},
    { path: 'table', title: 'Table List',  icon:'pe-7s-note2', class: '', roles: [] },
    { path: 'typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '', roles: [] },
    { path: 'icons', title: 'Icons',  icon:'pe-7s-science', class: '', roles: [] },
    { path: 'maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '', roles: [] },
    { path: 'notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '', roles: [] },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro', roles: [] },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authorityService:AuthorityService) { }

  ngOnInit() {

    this.menuItems = ROUTES.filter(r => this.authorityService.hasAnyRoles(r.roles));

    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
