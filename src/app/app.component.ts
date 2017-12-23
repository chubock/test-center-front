import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthorityService} from "./shared-module/service/authority.service";

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router, private authorityService:AuthorityService) {};
}
