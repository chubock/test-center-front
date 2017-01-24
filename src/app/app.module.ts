import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {EditorModule} from "primeng/components/editor/editor";
import {SharedModule} from "primeng/components/common/shared";

import {FocusDirective} from "./directive/FocusDirective";

import { AppComponent } from './app.component';
import {SingleAnswerChoiceQuestionComponent} from "./component/question/SingleAnswerChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./component/question/MultipleAnswerChoiceQuestionComponent";
import {WritingQuestionComponent} from "./component/question/writing/WritingQuestionComponent";
import {NumericQuestionComponent} from "./component/question/numeric/NumericQuestionComponent";
import {SelectInPassageQuestionComponent} from "./component/question/select-in-passage/SelectInPassageQuestionComponent";
import {TextCompletionQuestionComponent} from "./component/question/text-completion/TextCompletionQuestionComponent";
import {QuantitativeComparisonQuestionComponent} from "./component/question/quantitative-comparison/QuantitativeComparisonQuestionComponent";
import {QuantitativeSingleAnswerQuestionComponent} from "./component/question/quantitative-single-answer/QuantitativeSingleAnswerQuestionComponent";
import {QuantitativeMultipleAnswerQuestionComponent} from "./component/question/quantitative-multiple-answer/QuantitativeMultipleAnswerQuestionComponent";
import {ReadingComprehensionSingleAnswerQuestionComponent} from "./component/question/reading-comrehension-single-answer/ReadingComprehensionSingleAnswerQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestionComponent} from "./component/question/reading-comprehension-multiple-answer/ReadingComprehensionMultipleAnswerQuestionComponent";
import {SentenceEquivalenceQuestionComponent} from "./component/question/sentence-equivalence/SentenceEquivalenceQuestionComponent";
import {SentenceEquivalenceQuestionService} from "./service/question/SentenceEquivalenceQuestionService";
import {SentenceEquivalenceQuestionsComponent} from "./component/question/sentence-equivalence/SentenceEquivalenceQuestionsComponent";
import {PaginationModule, ButtonsModule} from "ng2-bootstrap";
import {QuantitativeComparisonQuestionsComponent} from "./component/question/quantitative-comparison/QuantitativeComparisonQuestionsComponent";
import {QuantitativeSingleAnswerQuestionsComponent} from "./component/question/quantitative-single-answer/QuantitativeSingleAnswerQuestionsComponent";
import {QuantitativeMultipleAnswerQuestionsComponent} from "./component/question/quantitative-multiple-answer/QuantitativeMultipleAnswerQuestionsComponent";
import {NumericQuestionsComponent} from "./component/question/numeric/NumericQuestionsComponent";
import {ReadingComprehensionSingleAnswerQuestionsComponent} from "./component/question/reading-comrehension-single-answer/ReadingComprehensionSingleAnswerQuestionsComponent";
import {ReadingComprehensionMultipleAnswerQuestionsComponent} from "./component/question/reading-comprehension-multiple-answer/ReadingComprehensionMultipleAnswerQuestionsComponent";
import {SelectInPassageQuestionsComponent} from "./component/question/select-in-passage/SelectInPassageQuestionsComponent";
import {TextCompletionQuestionsComponent} from "./component/question/text-completion/TextCompletionQuestionsComponent";
import {WritingQuestionsComponent} from "./component/question/writing/WritingQuestionsComponent";
import {NumericQuestionService} from "./service/question/NumericQuestionService";
import {QuantitativeComparisonQuestionService} from "./service/question/QuantitativeComparisonQuestionService";
import {QuantitativeMultipleAnswerQuestionService} from "./service/question/QuantitativeMultipleAnswerQuestionService";
import {QuantitativeSingleAnswerQuestionService} from "./service/question/QuantitativeSingleAnswerQuestionService";
import {ReadingComprehensionMultipleAnswerQuestionService} from "./service/question/ReadingComprehensionMultipleAnswerQuestionService";
import {ReadingComprehensionSingleAnswerQuestionService} from "./service/question/ReadingComprehensionSingleAnswerQuestionService";
import {SelectInPassageQuestionService} from "./service/question/SelectInPassageQuestionService";
import {TextCompletionQuestionService} from "./service/question/TextCompletionQuestionService";
import {WritingQuestionService} from "./service/question/WritingQuestionService";

@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    SingleAnswerChoiceQuestionComponent,
    MultipleAnswerChoiceQuestionComponent,
    QuantitativeComparisonQuestionComponent,
    QuantitativeComparisonQuestionsComponent,
    QuantitativeSingleAnswerQuestionComponent,
    QuantitativeSingleAnswerQuestionsComponent,
    QuantitativeMultipleAnswerQuestionComponent,
    QuantitativeMultipleAnswerQuestionsComponent,
    NumericQuestionComponent,
    NumericQuestionsComponent,
    ReadingComprehensionSingleAnswerQuestionComponent,
    ReadingComprehensionSingleAnswerQuestionsComponent,
    ReadingComprehensionMultipleAnswerQuestionComponent,
    ReadingComprehensionMultipleAnswerQuestionsComponent,
    SelectInPassageQuestionComponent,
    SelectInPassageQuestionsComponent,
    TextCompletionQuestionComponent,
    TextCompletionQuestionsComponent,
    SentenceEquivalenceQuestionComponent,
    SentenceEquivalenceQuestionsComponent,
    WritingQuestionComponent,
    WritingQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RadioButtonModule,
    CheckboxModule,
    EditorModule,
    SharedModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [
    NumericQuestionService,
    QuantitativeComparisonQuestionService,
    QuantitativeMultipleAnswerQuestionService,
    QuantitativeSingleAnswerQuestionService,
    ReadingComprehensionMultipleAnswerQuestionService,
    ReadingComprehensionSingleAnswerQuestionService,
    SelectInPassageQuestionService,
    SentenceEquivalenceQuestionService,
    TextCompletionQuestionService,
    WritingQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
