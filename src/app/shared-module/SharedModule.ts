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

@NgModule({
  declarations: [
    AlertsComponent,
    FocusDirective,
    MathJaxDirective
  ],
  imports: [
    CommonModule,
    HttpModule,
    PrimeSharedModule,
    AlertModule.forRoot()
  ],
  exports: [AlertsComponent, FocusDirective, MathJaxDirective]
})
export class SharedModule { }
