import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./MultipleAnswerChoiceQuestionComponent";
import {QuantitativeMultipleAnswerQuestion} from "../model/QuantitativeMultipleAnswerQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-multiple-answer-question",
  templateUrl: "../template/choice-question-component.html"
})
export class QuantitativeMultipleAnswerQuestionComponent extends MultipleAnswerChoiceQuestionComponent{

  @Input() question: QuantitativeMultipleAnswerQuestion = new QuantitativeMultipleAnswerQuestion();
  backup: QuantitativeMultipleAnswerQuestion = new QuantitativeMultipleAnswerQuestion();

  get dynamicMaxAnswerCount(): boolean {
    return true;
  }

}
