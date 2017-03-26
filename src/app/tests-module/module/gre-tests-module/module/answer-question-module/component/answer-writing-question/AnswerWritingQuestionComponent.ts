import {Component} from "@angular/core";
import {WritingQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/WritingQuestion";
import {AnswerQuestionComponent} from "../AnswerQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-writing-question",
  templateUrl: "./answer-writing-question-component.html"
})
export class AnswerWritingQuestionComponent extends AnswerQuestionComponent<WritingQuestion> {

  onAnswerChanged(): void {
    this.answerChanged.emit(this.question.answer);
  }

}
