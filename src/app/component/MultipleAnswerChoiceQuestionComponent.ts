import {Component, Input, OnInit} from "@angular/core";
import {ChoiceQuestion} from "../model/ChoiceQuestion";
import {Choice} from "../model/Choice";
import {SingleAnswerChoiceQuestion} from "../model/SingleAnswerChoiceQuestion";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "multiple-answer-choice-question",
  templateUrl: "../template/multiple-answer-choice-question-component.html",
  styles: [`.control-text{padding-top: 7px;}`]
})
export class MultipleAnswerChoiceQuestionComponent {
  @Input() question: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  @Input() number: number = 1;
  @Input() dynamicChoices: boolean = false;
  @Input() mode:string = "EDIT";

  constructor() {}

}
