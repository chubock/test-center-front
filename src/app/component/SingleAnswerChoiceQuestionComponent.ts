import {Component, Input, OnInit} from "@angular/core";
import {SingleAnswerChoiceQuestion} from "../model/SingleAnswerChoiceQuestion";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "single-answer-choice-question",
  templateUrl: "../template/choice-question-component.html"
})
export class SingleAnswerChoiceQuestionComponent extends ChoiceQuestionComponent{

  @Input() question: SingleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion();
  backup: SingleAnswerChoiceQuestion = new SingleAnswerChoiceQuestion();

  constructor() {super();}

  getQuestion(): Question {
    return this.question;
  }

  getBackup(): Question {
    return this.backup;
  }
}
