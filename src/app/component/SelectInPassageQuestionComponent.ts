import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestion} from "../model/SingleAnswerChoiceQuestion";
import {WritingQuestion} from "../model/WritingQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {SelectInPassageQuestion} from "../model/SelectInPassageQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "select-in-passage-question",
  templateUrl: "../template/select-in-passage-question-component.html"
})
export class SelectInPassageQuestionComponent extends QuestionComponent{
  @Input() question: SelectInPassageQuestion = new SelectInPassageQuestion();
  @Input() backup: SelectInPassageQuestion = new SelectInPassageQuestion();

  constructor() { super(); }


  getQuestion(): Question {
    return this.question;
  }

  getBackup(): Question {
    return this.backup;
  }
}
