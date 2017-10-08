import {Alert} from "../model/alert";
import {EventEmitter, Injectable} from "@angular/core";
/**
 * Created by Yubar on 1/28/2017.
 */

@Injectable()
export class AlertsService {
  event: EventEmitter<Alert> = new EventEmitter();

  newAlert(alert:Alert):void {
    this.event.emit(alert);
  }

}
