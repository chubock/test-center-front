import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {AnswerDataInterpretationSetMultipleAnswerQuestionComponent} from "./component/answer-data-interpretation-set-multiple-answer-component/AnswerDataInterpretationSetMultipleAnswerQuestionComponent";
import {AnswerDataInterpretationSetNumericQuestionComponent} from "./component/answer-data-interpretation-set-numeric-component/AnswerDataInterpretationSetNumericQuestionComponent";
import {AnswerDataInterpretationSetSingleAnswerQuestionComponent} from "./component/answer-data-interpretation-set-single-answer-component/AnswerDataInterpretationSetSingleAnswerQuestionComponent";
import {AnswerNumericQuestionComponent} from "./component/answer-numeric-question-component/AnswerNumericQuestionComponent";
import {AnswerQuantitativeMultipleAnswerQuestionComponent} from "./component/answer-quantitative-multiple-answer-question-component/AnswerQuantitativeMultipleAnswerQuestionComponent";
import {AnswerQuantitativeSingleAnswerQuestionComponent} from "./component/answer-quantitative-single-answer-question-component/AnswerQuantitativeSingleAnswerQuestionComponent";
import {AnswerQuantitativeComparisonQuestionComponent} from "./component/answer-quantitative-comparison-question/AnswerQuantitativeComparisonQuestionComponent";
import {AnswerReadingComprehensionMultipleAnswerQuestionComponent} from "./component/answer-reading-comprehension-multiple-answer-question-component/AnswerReadingComprehensionMultipleAnswerQuestionComponent";
import {AnswerReadingComprehensionSingleAnswerQuestionComponent} from "./component/answer-reading-comprehension-single-answer-question-component/AnswerReadingComprehensionSingleAnswerQuestionComponent";
import {AnswerSelectInPassageQuestionComponent} from "./component/answer-select-in-passage-question-component/AnswerSelectInPassageQuestionComponent";
import {AnswerSentenceEquivalenceQuestionComponent} from "./component/answer-sentence-equivalence-question/AnswerSentenceEquivalenceQuestionComponent";
import {AnswerTextCompletionQuestionComponent} from "./component/answer-text-completion-question/AnswerTextCompletionQuestionComponent";
import {AnswerWritingQuestionComponent} from "./component/answer-writing-question/AnswerWritingQuestionComponent";
import {SharedModule} from "../../../../../shared-module/SharedModule";
import {ButtonsModule} from "ng2-bootstrap";
/**
 * Created by Yubar on 3/22/2017.
 */

@NgModule({
  declarations: [
    AnswerDataInterpretationSetMultipleAnswerQuestionComponent,
    AnswerDataInterpretationSetSingleAnswerQuestionComponent,
    AnswerDataInterpretationSetNumericQuestionComponent,
    AnswerNumericQuestionComponent,
    AnswerQuantitativeMultipleAnswerQuestionComponent,
    AnswerQuantitativeSingleAnswerQuestionComponent,
    AnswerQuantitativeComparisonQuestionComponent,
    AnswerReadingComprehensionMultipleAnswerQuestionComponent,
    AnswerReadingComprehensionSingleAnswerQuestionComponent,
    AnswerSelectInPassageQuestionComponent,
    AnswerSentenceEquivalenceQuestionComponent,
    AnswerTextCompletionQuestionComponent,
    AnswerWritingQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    PrimeSharedModule,
    RadioButtonModule,
    CheckboxModule,
    SharedModule
  ],
  exports: [
    AnswerDataInterpretationSetMultipleAnswerQuestionComponent,
    AnswerDataInterpretationSetSingleAnswerQuestionComponent,
    AnswerDataInterpretationSetNumericQuestionComponent,
    AnswerNumericQuestionComponent,
    AnswerQuantitativeMultipleAnswerQuestionComponent,
    AnswerQuantitativeSingleAnswerQuestionComponent,
    AnswerQuantitativeComparisonQuestionComponent,
    AnswerReadingComprehensionMultipleAnswerQuestionComponent,
    AnswerReadingComprehensionSingleAnswerQuestionComponent,
    AnswerSelectInPassageQuestionComponent,
    AnswerSentenceEquivalenceQuestionComponent,
    AnswerTextCompletionQuestionComponent,
    AnswerWritingQuestionComponent
  ]
})
export class AnswerQuestionModule {

}
