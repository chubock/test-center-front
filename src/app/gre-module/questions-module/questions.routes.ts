import {Route, RouterModule} from "@angular/router";
import {QuestionsComponent} from "./questions.component";
import {QuestionsRouteComponent} from "./questions-route.component";
import {NumericQuestionsComponent} from "./component/numeric-question-component/numeric-questions.component";
import {DataInterpretationSetQuestionsComponent} from "./component/data-interpretation-set-question-component/data-interpretation-set-questions.component";
import {QuantitativeComparisonQuestionsComponent} from "./component/quantitative-comparison-question-component/quantitative-comparison-questions.component";
import {QuantitativeMultipleAnswerQuestionsComponent} from "./component/quantitative-multiple-answer-question-component/quantitative-multiple-answer-questions.component";
import {QuantitativeSingleAnswerQuestionsComponent} from "./component/quantitative-single-answer-question-component/quantitative-single-answer-questions.component";
import {ReadingComprehensionQuestionsComponent} from "./component/reading-comprehension-question-component/reading-comprehension-questions.component";
import {SentenceEquivalenceQuestionsComponent} from "./component/sentence-equivalence-question-component/sentence-equivalence-questions.component";
import {TextCompletionQuestionsComponent} from "./component/text-completion-question-component/text-completion-questions.component";
import {WritingQuestionsComponent} from "./component/writing-question-component/writing-questions.component";
/**
 * Created by yubar on 2/19/17.
 */

export const QUESTIONS_ROUTES:Route[] = [
  {path:'', component: QuestionsRouteComponent , children:[
    {path: '', component: QuestionsComponent},
    {path: 'numeric', component: NumericQuestionsComponent},
    {path: 'data-interpretation-set', component: DataInterpretationSetQuestionsComponent},
    {path: 'quantitative-comparison', component: QuantitativeComparisonQuestionsComponent},
    {path: 'quantitative-multiple-answer', component: QuantitativeMultipleAnswerQuestionsComponent},
    {path: 'quantitative-single-answer', component: QuantitativeSingleAnswerQuestionsComponent},
    {path: 'reading-comprehension', component: ReadingComprehensionQuestionsComponent},
    {path: 'sentence-equivalence', component: SentenceEquivalenceQuestionsComponent},
    {path: 'text-completion', component: TextCompletionQuestionsComponent},
    {path: 'writing', component: WritingQuestionsComponent}
  ]}
];

export const questionsRoutes = RouterModule.forChild(QUESTIONS_ROUTES);
