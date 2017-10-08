import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {SharedModule as PrimeSharedModule} from "primeng/components/common/shared";
import {AnswerDataInterpretationSetMultipleAnswerQuestionComponent} from "./component/answer-data-interpretation-set-multiple-answer-component/answer-data-interpretation-set-multiple-answer-question.component";
import {AnswerDataInterpretationSetNumericQuestionComponent} from "./component/answer-data-interpretation-set-numeric-component/answer-data-interpretation-set-numeric-question.component";
import {AnswerDataInterpretationSetSingleAnswerQuestionComponent} from "./component/answer-data-interpretation-set-single-answer-component/answer-data-interpretation-set-single-answer-question.component";
import {AnswerNumericQuestionComponent} from "./component/answer-numeric-question-component/answer.numeric-question.component";
import {AnswerQuantitativeMultipleAnswerQuestionComponent} from "./component/answer-quantitative-multiple-answer-question-component/answer-quantitative-multiple-answer-question.component";
import {AnswerQuantitativeSingleAnswerQuestionComponent} from "./component/answer-quantitative-single-answer-question-component/answer-quantitative-single-answer-question.component";
import {AnswerQuantitativeComparisonQuestionComponent} from "./component/answer-quantitative-comparison-question/answer-quantitative-comparison-question.component";
import {AnswerReadingComprehensionMultipleAnswerQuestionComponent} from "./component/answer-reading-comprehension-multiple-answer-question-component/answer-reading-comprehension-multiple-answer-question.component";
import {AnswerReadingComprehensionSingleAnswerQuestionComponent} from "./component/answer-reading-comprehension-single-answer-question-component/answer-reading-comprehension-single-answer-question.component";
import {AnswerSelectInPassageQuestionComponent} from "./component/answer-select-in-passage-question-component/answer-select-in-passage-question.component";
import {AnswerSentenceEquivalenceQuestionComponent} from "./component/answer-sentence-equivalence-question/answer-sentence-equivalence-question.component";
import {AnswerTextCompletionQuestionComponent} from "./component/answer-text-completion-question/answer-text-completion-question.component";
import {AnswerWritingQuestionComponent} from "./component/answer-writing-question/answer-writing-question.component";
import {ButtonsModule, TabsModule} from "ng2-bootstrap";
import {EditorModule} from "primeng/primeng";
import {SharedModule} from "../../shared-module/shared.module";
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
    TabsModule.forRoot(),
    EditorModule,
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
