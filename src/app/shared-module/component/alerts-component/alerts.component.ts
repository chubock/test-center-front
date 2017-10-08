import {Component, OnInit} from "@angular/core";
import {AlertsService} from "../../service/alerts.service";
import {Alert} from "../../model/alert";
import {environment} from "../../../../environments/environment";
/**
 * Created by Yubar on 1/28/2017.
 */

@Component({
  selector: 'alerts-component',
  templateUrl: './alerts.component.html'
})
export class AlertsComponent implements OnInit{
  alerts:Alert[] = [];
  dismissTimeout:number = environment.alertsDismissTimeout;
  dismissible:boolean = environment.alertsDismissible;

  constructor(private alertService:AlertsService) {}

  ngOnInit():void {
    this.alertService.event.subscribe(alert => this.alerts.push(alert));
  }

}
