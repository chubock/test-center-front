import {Route, RouterModule} from "@angular/router";
import {NumericQuestionsComponent} from "./component/numeric-question-component/NumericQuestionsComponent";
import {DataInterpretationSetQuestionsComponent} from "./component/data-interpretation-set-question-component/DataInterpretationSetQuestionsComponent";
import {QuantitativeComparisonQuestionsComponent} from "./component/quantitative-comparison-question-component/QuantitativeComparisonQuestionsComponent";
import {QuantitativeMultipleAnswerQuestionsComponent} from "./component/quantitative-multiple-answer-question-component/QuantitativeMultipleAnswerQuestionsComponent";
import {QuantitativeSingleAnswerQuestionsComponent} from "./component/quantitative-single-answer-question-component/QuantitativeSingleAnswerQuestionsComponent";
import {ReadingComprehensionQuestionsComponent} from "./component/reading-comprehension-question-component/ReadingComprehensionQuestionsComponent";
import {SentenceEquivalenceQuestionsComponent} from "./component/sentence-equivalence-question-component/SentenceEquivalenceQuestionsComponent";
import {TextCompletionQuestionsComponent} from "./component/text-completion-question-component/TextCompletionQuestionsComponent";
import {WritingQuestionsComponent} from "./component/writing-question-component/WritingQuestionsComponent";
import {GREQuestionsComponent} from "./component/gre-questions-component/GREQuestionsManagerComponent";
import {GREQuestionsRouteComponent} from "./GREQuestionsRouteComponent";
/**
 * Created by yubar on 2/19/17.
 */

export const GRE_QUESTIONS_ROUTES: Route[] = [
  {path: '', component: GREQuestionsRouteComponent, children: [
    {path: '', component: GREQuestionsComponent},
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

export const greQuestionsRouting = RouterModule.forChild(GRE_QUESTIONS_ROUTES);
