import {Component, OnInit} from "@angular/core";
import {Alert} from "../../model/Alert";
import {AlertsService} from "../../service/AlertsService";
import {alertsDismissTimeout, alertsDismissible} from "../../app.config";
/**
 * Created by Yubar on 1/28/2017.
 */

@Component({
  selector: 'alerts-component',
  templateUrl: './alerts-component.html'
})
export class AlertsComponent implements OnInit{
  alerts:Alert[] = [];
  dismissTimeout:number = alertsDismissTimeout;
  dismissible:boolean = alertsDismissible;

  constructor(private alertService:AlertsService) {}

  ngOnInit():void {
    this.alertService.event.subscribe(alert => this.alerts.push(alert));
  }

}
