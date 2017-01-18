import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ToggleButtonModule} from "primeng/components/togglebutton/togglebutton";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {EditorModule} from "primeng/components/editor/editor";
import {SharedModule} from "primeng/components/common/shared";

import {FocusDirective} from "./directive/FocusDirective";

import { AppComponent } from './app.component';
import {SingleAnswerChoiceQuestionComponent} from "./component/SingleAnswerChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./component/MultipleAnswerChoiceQuestionComponent";
import {WritingQuestionComponent} from "./component/WritingQuestionComponent";
import {NumericQuestionComponent} from "./component/NumericQuestionComponent";
import {SelectInPassageQuestionComponent} from "./component/SelectInPassageQuestionComponent";
import {TextCompletionQuestionComponent} from "./component/TextCompletionQuestionComponent";
import {QuantitativeComparisonQuestionComponent} from "./component/QuantitativeComparisonQuestionComponent";
import {QuantitativeSingleAnswerQuestionComponent} from "./component/QuantitativeSingleAnswerQuestionComponent";
import {QuantitativeMultipleAnswerQuestionComponent} from "./component/QuantitativeMultipleAnswerQuestionComponent";
import {ReadingComprehensionSingleAnswerQuestionComponent} from "./component/ReadingComprehensionSingleAnswerQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestionComponent} from "./component/ReadingComprehensionMultipleAnswerQuestionComponent";
import {SentenceEquivalenceQuestionComponent} from "./component/SentenceEquivalenceQuestionComponent";

@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    SingleAnswerChoiceQuestionComponent,
    MultipleAnswerChoiceQuestionComponent,
    QuantitativeComparisonQuestionComponent,
    QuantitativeSingleAnswerQuestionComponent,
    QuantitativeMultipleAnswerQuestionComponent,
    NumericQuestionComponent,
    ReadingComprehensionSingleAnswerQuestionComponent,
    ReadingComprehensionMultipleAnswerQuestionComponent,
    SelectInPassageQuestionComponent,
    TextCompletionQuestionComponent,
    SentenceEquivalenceQuestionComponent,
    WritingQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RadioButtonModule,
    CheckboxModule,
    EditorModule,
    SharedModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
