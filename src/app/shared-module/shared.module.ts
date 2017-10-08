/**
 * Created by yubar on 2/18/17.
 */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {AlertModule} from "ng2-bootstrap";
import {AlertsComponent} from "./component/alerts-component/alerts.component";
import {FocusDirective} from "./directive/focus.directive";
import {MathJaxDirective} from "./directive/mathjax.directive";
import {CommonModule} from "@angular/common";
import {TimerComponent} from "./component/timer-component/timer.component";
import {TimePipe} from "./pipe/time.pipe";

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
  exports: [AlertsComponent, FocusDirective, MathJaxDirective, TimerComponent],
})
export class SharedModule { }
