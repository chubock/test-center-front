import {Component, Input, OnInit} from "@angular/core";
import {ChoiceQuestion} from "../model/ChoiceQuestion";
import {Choice} from "../model/Choice";
import {SingleAnswerChoiceQuestion} from "../model/SingleAnswerChoiceQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "single-answer-choice-question",
  templateUrl: "../template/single-answer-choice-question-component.html",
  styles: [`.control-text{padding-top: 7px;}`]
})
export class SingleAnswerChoiceQuestionComponent {
  @Input() question: SingleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion();
  @Input() number: number = 1;
  @Input() dynamicChoices: boolean = false;
  @Input() mode:string = "EDIT";

  constructor() {}

}
