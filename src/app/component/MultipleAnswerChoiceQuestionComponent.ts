import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "multiple-answer-choice-question",
  templateUrl: "../template/choice-question-component.html"
})
export class MultipleAnswerChoiceQuestionComponent extends ChoiceQuestionComponent{

  @Input() question: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  backup: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();

  constructor() {super()}

  getQuestion(): Question {
    return this.question;
  }

  getBackup(): Question {
    return this.backup;
  }
}
