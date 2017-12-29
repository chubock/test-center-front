import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'portal-root',
  template: `
    <div class="wrapper">
      <div class="sidebar" data-color="red" data-image="">
          <app-sidebar></app-sidebar>
          <div class="sidebar-background" style="background-image: url(../../assets/img/sidebar-5.jpg)"></div>
      </div>
  
      <div class="main-panel" style="height: 100%">
          <div style="height: 65px"><navbar-cmp></navbar-cmp></div>
          <div style="height: calc(100% - 65px);"><router-outlet></router-outlet></div>
          <!--<div *ngIf="isMap('maps')" class="footer navbar-fixed-bottom">-->
              <!--<footer-cmp></footer-cmp>-->
          <!--</div>-->
      </div>
    </div>`
})
export class PortalRouteComponent implements OnInit {

  constructor(public location: Location) {}

  ngOnInit(){
  }

  isMap(path){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(path == titlee){
      return false;
    }
    else {
      return true;
    }
  }
}
