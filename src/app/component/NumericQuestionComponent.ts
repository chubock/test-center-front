import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestion} from "../model/SingleAnswerChoiceQuestion";
import {WritingQuestion} from "../model/WritingQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {NumericQuestion} from "../model/NumericQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "numeric-question",
  templateUrl: "../template/numeric-question-component.html"
})
export class NumericQuestionComponent extends QuestionComponent{
  @Input() question: NumericQuestion = new NumericQuestion();
  @Input() backup: NumericQuestion = new NumericQuestion();
}
