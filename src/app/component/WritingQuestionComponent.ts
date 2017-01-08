import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestion} from "../model/SingleAnswerChoiceQuestion";
import {WritingQuestion} from "../model/WritingQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "writing-question",
  templateUrl: "../template/writing-question-component.html"
})
export class WritingQuestionComponent extends QuestionComponent{
  @Input() question: WritingQuestion = new WritingQuestion();
  @Input() backup: WritingQuestion = new WritingQuestion();

  constructor() { super(); }


  getQuestion(): Question {
    return this.question;
  }

  getBackup(): Question {
    return this.backup;
  }
}
