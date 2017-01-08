import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RadioButtonModule, CheckboxModule} from "primeng/primeng";
import {SingleAnswerChoiceQuestionComponent} from "./component/SingleAnswerChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./component/MultipleAnswerChoiceQuestionComponent";
import {WritingQuestionComponent} from "./component/WritingQuestionComponent";
import {NumericQuestion} from "./model/NumericQuestion";
import {NumericQuestionComponent} from "./component/NumericQuestionComponent";

@NgModule({
  declarations: [
    AppComponent,
    SingleAnswerChoiceQuestionComponent,
    MultipleAnswerChoiceQuestionComponent,
    WritingQuestionComponent,
    NumericQuestionComponent
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
