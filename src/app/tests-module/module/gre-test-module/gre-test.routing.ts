import {Route, RouterModule} from "@angular/router";
import {NumericQuestionsComponent} from "./component/numeric/NumericQuestionsComponent";
import {DataInterpretationSetQuestionsComponent} from "./component/data-interpretation-set/DataInterpretationSetQuestionsComponent";
import {QuantitativeComparisonQuestionsComponent} from "./component/quantitative-comparison/QuantitativeComparisonQuestionsComponent";
import {QuantitativeMultipleAnswerQuestionsComponent} from "./component/quantitative-multiple-answer/QuantitativeMultipleAnswerQuestionsComponent";
import {QuantitativeSingleAnswerQuestionsComponent} from "./component/quantitative-single-answer/QuantitativeSingleAnswerQuestionsComponent";
import {ReadingComprehensionQuestionsComponent} from "./component/reading-comprehension/ReadingComprehensionQuestionsComponent";
import {SentenceEquivalenceQuestionsComponent} from "./component/sentence-equivalence/SentenceEquivalenceQuestionsComponent";
import {TextCompletionQuestionsComponent} from "./component/text-completion/TextCompletionQuestionsComponent";
import {WritingQuestionsComponent} from "./component/writing/WritingQuestionsComponent";
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
