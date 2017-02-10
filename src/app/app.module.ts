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
import {TextCompletionQuestionComponent} from "./component/question/text-completion/TextCompletionQuestionComponent";
import {QuantitativeComparisonQuestionComponent} from "./component/question/quantitative-comparison/QuantitativeComparisonQuestionComponent";
import {QuantitativeSingleAnswerQuestionComponent} from "./component/question/quantitative-single-answer/QuantitativeSingleAnswerQuestionComponent";
import {QuantitativeMultipleAnswerQuestionComponent} from "./component/question/quantitative-multiple-answer/QuantitativeMultipleAnswerQuestionComponent";
import {ReadingComprehensionQuestionComponent} from "./component/question/reading-comprehension/ReadingComprehensionQuestionComponent";
import {ReadingComprehensionQuestionsComponent} from "./component/question/reading-comprehension/ReadingComprehensionQuestionsComponent";
import {ReadingComprehensionSingleAnswerQuestionComponent} from "./component/question/reading-comprehension/ReadingComprehensionSingleAnswerQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestionComponent} from "./component/question/reading-comprehension/ReadingComprehensionMultipleAnswerQuestionComponent";
import {SelectInPassageQuestionComponent} from "./component/question/reading-comprehension/SelectInPassageQuestionComponent";
import {SentenceEquivalenceQuestionComponent} from "./component/question/sentence-equivalence/SentenceEquivalenceQuestionComponent";
import {SentenceEquivalenceQuestionService} from "./service/question/SentenceEquivalenceQuestionService";
import {SentenceEquivalenceQuestionsComponent} from "./component/question/sentence-equivalence/SentenceEquivalenceQuestionsComponent";
import {PaginationModule, ButtonsModule, DropdownModule, AlertModule} from "ng2-bootstrap";
import {QuantitativeComparisonQuestionsComponent} from "./component/question/quantitative-comparison/QuantitativeComparisonQuestionsComponent";
import {QuantitativeSingleAnswerQuestionsComponent} from "./component/question/quantitative-single-answer/QuantitativeSingleAnswerQuestionsComponent";
import {QuantitativeMultipleAnswerQuestionsComponent} from "./component/question/quantitative-multiple-answer/QuantitativeMultipleAnswerQuestionsComponent";
import {NumericQuestionsComponent} from "./component/question/numeric/NumericQuestionsComponent";
import {TextCompletionQuestionsComponent} from "./component/question/text-completion/TextCompletionQuestionsComponent";
import {WritingQuestionsComponent} from "./component/question/writing/WritingQuestionsComponent";
import {NumericQuestionService} from "./service/question/NumericQuestionService";
import {QuantitativeComparisonQuestionService} from "./service/question/QuantitativeComparisonQuestionService";
import {QuantitativeMultipleAnswerQuestionService} from "./service/question/QuantitativeMultipleAnswerQuestionService";
import {QuantitativeSingleAnswerQuestionService} from "./service/question/QuantitativeSingleAnswerQuestionService";
import {ReadingComprehensionQuestionService} from "./service/question/ReadingComprehensionQuestionService";
import {TextCompletionQuestionService} from "./service/question/TextCompletionQuestionService";
import {WritingQuestionService} from "./service/question/WritingQuestionService";
import {FileService} from "./service/FileService";
import {QuestionsManagerComponent} from "./component/question/QuestionsManagerComponent";
import {DataInterpretationSetQuestionComponent} from "./component/question/data-interpretation-set/DataInterpretationSetQuestionComponent";
import {DataInterpretationSetQuestionService} from "./service/question/DataInterpretationSetQuestionService";
import {DataInterpretationNumericQuestionComponent} from "./component/question/data-interpretation-set/DataInterpretationNumericQuestionComponent";
import {DataInterpretationMultipleAnswerQuestionComponent} from "./component/question/data-interpretation-set/DataInterpretationMultipleAnswerQuestionComponent";
import {DataInterpretationSingleAnswerQuestionComponent} from "./component/question/data-interpretation-set/DataInterpretationSingleAnswerQuestionComponent";
import {DataInterpretationSetQuestionsComponent} from "./component/question/data-interpretation-set/DataInterpretationSetQuestionsComponent";
import {MathJaxDirective} from "./directive/MathJaxDirective";
import {AlertsService} from "./service/AlertsService";
import {AlertsComponent} from "./component/alerts-component/AlertsComponent";

@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    MathJaxDirective,
    AlertsComponent,
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
    ReadingComprehensionQuestionComponent,
    ReadingComprehensionQuestionsComponent,
    ReadingComprehensionSingleAnswerQuestionComponent,
    ReadingComprehensionMultipleAnswerQuestionComponent,
    SelectInPassageQuestionComponent,
    TextCompletionQuestionComponent,
    TextCompletionQuestionsComponent,
    SentenceEquivalenceQuestionComponent,
    SentenceEquivalenceQuestionsComponent,
    WritingQuestionComponent,
    WritingQuestionsComponent,
    DataInterpretationNumericQuestionComponent,
    DataInterpretationMultipleAnswerQuestionComponent,
    DataInterpretationSingleAnswerQuestionComponent,
    DataInterpretationSetQuestionComponent,
    DataInterpretationSetQuestionsComponent,
    QuestionsManagerComponent
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
    ButtonsModule.forRoot(),
    DropdownModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    FileService,
    AlertsService,
    NumericQuestionService,
    QuantitativeComparisonQuestionService,
    QuantitativeMultipleAnswerQuestionService,
    QuantitativeSingleAnswerQuestionService,
    ReadingComprehensionQuestionService,
    SentenceEquivalenceQuestionService,
    TextCompletionQuestionService,
    WritingQuestionService,
    DataInterpretationSetQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
