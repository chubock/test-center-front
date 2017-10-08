import {NgModule} from "@angular/core";
import {QuestionsRouteComponent} from "./questions-route.component"
import {QuestionsComponent} from "./questions.component";
import {questionsRoutes} from "./questions.routes";
import {QuantitativeComparisonQuestionComponent} from "./component/quantitative-comparison-question-component/quantitative-comparison-question.component";
import {QuantitativeComparisonQuestionsComponent} from "./component/quantitative-comparison-question-component/quantitative-comparison-questions.component";
import {QuantitativeSingleAnswerQuestionComponent} from "./component/quantitative-single-answer-question-component/quantitative-single-answer-question.component";
import {QuantitativeSingleAnswerQuestionsComponent} from "./component/quantitative-single-answer-question-component/quantitative-single-answer-questions.component";
import {QuantitativeMultipleAnswerQuestionComponent} from "./component/quantitative-multiple-answer-question-component/quantitative-multiple-answer-question.component";
import {QuantitativeMultipleAnswerQuestionsComponent} from "./component/quantitative-multiple-answer-question-component/quantitative-multiple-answer-questions.component";
import {NumericQuestionComponent} from "./component/numeric-question-component/numeric-question.component";
import {NumericQuestionsComponent} from "./component/numeric-question-component/numeric-questions.component";
import {ReadingComprehensionQuestionComponent} from "./component/reading-comprehension-question-component/reading-comprehension-question.component";
import {ReadingComprehensionQuestionsComponent} from "./component/reading-comprehension-question-component/reading-comprehension-questions.component";
import {ReadingComprehensionSingleAnswerQuestionComponent} from "./component/reading-comprehension-question-component/reading-comprehension-single-answer-question.component";
import {ReadingComprehensionMultipleAnswerQuestionComponent} from "./component/reading-comprehension-question-component/reading-comprehension-multiple-answer-question.component";
import {SelectInPassageQuestionComponent} from "./component/reading-comprehension-question-component/select-in-passage-question.component";
import {TextCompletionQuestionComponent} from "./component/text-completion-question-component/text-completion-question.component";
import {TextCompletionQuestionsComponent} from "./component/text-completion-question-component/text-completion-questions.component";
import {SentenceEquivalenceQuestionComponent} from "./component/sentence-equivalence-question-component/sentence-equivalence-question.component";
import {SentenceEquivalenceQuestionsComponent} from "./component/sentence-equivalence-question-component/sentence-equivalence-questions.component";
import {WritingQuestionComponent} from "./component/writing-question-component/writing-question.component";
import {WritingQuestionsComponent} from "./component/writing-question-component/writing-questions.component";
import {DataInterpretationNumericQuestionComponent} from "./component/data-interpretation-set-question-component/data-interpretation-numeric-question.component";
import {DataInterpretationMultipleAnswerQuestionComponent} from "./component/data-interpretation-set-question-component/data-interpretation-multiple-answer-question.component";
import {DataInterpretationSingleAnswerQuestionComponent} from "./component/data-interpretation-set-question-component/data-interpretation-single-answer-question.component";
import {DataInterpretationSetQuestionComponent} from "./component/data-interpretation-set-question-component/data-interpretation-set-question.component";
import {DataInterpretationSetQuestionsComponent} from "./component/data-interpretation-set-question-component/data-interpretation-set-questions.component";
import {SharedModule} from "../../shared-module/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {SharedModule as PrimeSharedModule} from "primeng/primeng"
import {CheckboxModule, EditorModule, RadioButtonModule} from "primeng/primeng";
import {ButtonsModule, PaginationModule} from "ng2-bootstrap";
import {NumericQuestionService} from "./service/numeric-question.service";
import {QuantitativeComparisonQuestionService} from "./service/quantitative-comparison-question.service";
import {QuantitativeMultipleAnswerQuestionService} from "./service/quantitative-multiple-answer-question.service";
import {QuantitativeSingleAnswerQuestionService} from "./service/quantitative-single-answer-question.service";
import {ReadingComprehensionQuestionService} from "./service/reading-comprehension-question.service";
import {SentenceEquivalenceQuestionService} from "./service/sentence-equivalence-question.service";
import {TextCompletionQuestionService} from "./service/text-completion-question.service";
import {WritingQuestionService} from "./service/writing-question.service";
import {DataInterpretationSetQuestionService} from "./service/data-interpretation-set-question.service";
import {authHttpServiceFactory} from "../../shared-module/service/auth-http-service.factory";
import {AuthHttp} from "angular2-jwt";
/**
 * Created by yubar on 2/19/17.
 */

@NgModule({
  declarations: [
    QuestionsRouteComponent,
    QuestionsComponent,
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
  ],
  imports: [
    questionsRoutes,
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
export class QuestionsModule {

}
