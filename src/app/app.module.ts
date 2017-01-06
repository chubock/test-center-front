import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ChoiceQuestionComponent} from "./component/ChoiceQuestionComponent";
import {RadioButtonModule, CheckboxModule} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent,
    ChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RadioButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
