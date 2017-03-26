import {NgModule} from "@angular/core";
import {QuantitativeComparisonQuestionComponent} from "./component/quantitative-comparison-question-component/QuantitativeComparisonQuestionComponent";
import {QuantitativeComparisonQuestionsComponent} from "./component/quantitative-comparison-question-component/QuantitativeComparisonQuestionsComponent";
import {QuantitativeSingleAnswerQuestionComponent} from "./component/quantitative-single-answer-question-component/QuantitativeSingleAnswerQuestionComponent";
import {QuantitativeSingleAnswerQuestionsComponent} from "./component/quantitative-single-answer-question-component/QuantitativeSingleAnswerQuestionsComponent";
import {QuantitativeMultipleAnswerQuestionComponent} from "./component/quantitative-multiple-answer-question-component/QuantitativeMultipleAnswerQuestionComponent";
import {QuantitativeMultipleAnswerQuestionsComponent} from "./component/quantitative-multiple-answer-question-component/QuantitativeMultipleAnswerQuestionsComponent";
import {NumericQuestionComponent} from "./component/numeric-question-component/NumericQuestionComponent";
import {NumericQuestionsComponent} from "./component/numeric-question-component/NumericQuestionsComponent";
import {ReadingComprehensionQuestionComponent} from "./component/reading-comprehension-question-component/ReadingComprehensionQuestionComponent";
import {ReadingComprehensionQuestionsComponent} from "./component/reading-comprehension-question-component/ReadingComprehensionQuestionsComponent";
import {ReadingComprehensionSingleAnswerQuestionComponent} from "./component/reading-comprehension-question-component/ReadingComprehensionSingleAnswerQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestionComponent} from "./component/reading-comprehension-question-component/ReadingComprehensionMultipleAnswerQuestionComponent";
import {SelectInPassageQuestionComponent} from "./component/reading-comprehension-question-component/SelectInPassageQuestionComponent";
import {TextCompletionQuestionComponent} from "./component/text-completion-question-component/TextCompletionQuestionComponent";
import {TextCompletionQuestionsComponent} from "./component/text-completion-question-component/TextCompletionQuestionsComponent";
import {SentenceEquivalenceQuestionComponent} from "./component/sentence-equivalence-question-component/SentenceEquivalenceQuestionComponent";
import {SentenceEquivalenceQuestionsComponent} from "./component/sentence-equivalence-question-component/SentenceEquivalenceQuestionsComponent";
import {WritingQuestionComponent} from "./component/writing-question-component/WritingQuestionComponent";
import {WritingQuestionsComponent} from "./component/writing-question-component/WritingQuestionsComponent";
import {DropdownModule, ButtonsModule, PaginationModule} from "ng2-bootstrap";
import {EditorModule} from "primeng/components/editor/editor";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NumericQuestionService} from "./service/NumericQuestionService";
import {QuantitativeComparisonQuestionService} from "./service/QuantitativeComparisonQuestionService";
import {QuantitativeMultipleAnswerQuestionService} from "./service/QuantitativeMultipleAnswerQuestionService";
import {QuantitativeSingleAnswerQuestionService} from "./service/QuantitativeSingleAnswerQuestionService";
import {ReadingComprehensionQuestionService} from "./service/ReadingComprehensionQuestionService";
import {SentenceEquivalenceQuestionService} from "./service/SentenceEquivalenceQuestionService";
import {TextCompletionQuestionService} from "./service/TextCompletionQuestionService";
import {WritingQuestionService} from "./service/WritingQuestionService";
import {DataInterpretationSetQuestionService} from "./service/DataInterpretationSetQuestionService";
import {DataInterpretationNumericQuestionComponent} from "./component/data-interpretation-set-question-component/DataInterpretationNumericQuestionComponent";
import {DataInterpretationMultipleAnswerQuestionComponent} from "./component/data-interpretation-set-question-component/DataInterpretationMultipleAnswerQuestionComponent";
import {DataInterpretationSingleAnswerQuestionComponent} from "./component/data-interpretation-set-question-component/DataInterpretationSingleAnswerQuestionComponent";
import {DataInterpretationSetQuestionComponent} from "./component/data-interpretation-set-question-component/DataInterpretationSetQuestionComponent";
import {DataInterpretationSetQuestionsComponent} from "./component/data-interpretation-set-question-component/DataInterpretationSetQuestionsComponent";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {GREQuestionsComponent} from "./component/gre-questions-component/GREQuestionsManagerComponent";
import {SharedModule} from "../../../shared-module/SharedModule";
import {greQuestionsRouting} from "./gre-questions.routing";
import {GREQuestionsRouteComponent} from "./GREQuestionsRouteComponent";
/**
 * Created by yubar on 2/18/17.
 */


@NgModule({
  declarations: [
    GREQuestionsRouteComponent,
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
    GREQuestionsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RadioButtonModule,
    CheckboxModule,
    EditorModule,
    PrimeSharedModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    DropdownModule.forRoot(),
    greQuestionsRouting
  ],
  providers: [
    NumericQuestionService,
    QuantitativeComparisonQuestionService,
    QuantitativeMultipleAnswerQuestionService,
    QuantitativeSingleAnswerQuestionService,
    ReadingComprehensionQuestionService,
    SentenceEquivalenceQuestionService,
    TextCompletionQuestionService,
    WritingQuestionService,
    DataInterpretationSetQuestionService
  ]
})
export class GREQuestionsModule { }
