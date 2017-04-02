/**
 * Created by yubar on 2/18/17.
 */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {AlertModule} from "ng2-bootstrap";
import {AlertsComponent} from "./component/alerts-component/AlertsComponent";
import {FocusDirective} from "./directive/FocusDirective";
import {MathJaxDirective} from "./directive/MathJaxDirective";
import {CommonModule} from "@angular/common";
import {SimpleTimer} from "ng2-simple-timer";
import {TimerComponent} from "./component/timer-component/TimerComponent";
import {TimePipe} from "./pipe/TimePipe";

@NgModule({
  declarations: [
    AlertsComponent,
    FocusDirective,
    MathJaxDirective,
    TimerComponent,
    TimePipe
  ],
  imports: [
    CommonModule,
    HttpModule,
    PrimeSharedModule,
    AlertModule.forRoot()
  ],
  exports: [AlertsComponent, FocusDirective, MathJaxDirective, TimerComponent]
})
export class SharedModule { }
