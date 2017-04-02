import {Component, OnInit} from "@angular/core";
import {TextCompletionQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/TextCompletionQuestion";
import {AnswerQuestionComponent} from "../AnswerQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-text-completion-question",
  templateUrl: "./answer-text-completion-question-component.html"
})
export class AnswerTextCompletionQuestionComponent extends AnswerQuestionComponent<TextCompletionQuestion> {

  direction:string = "Directions: For each blank select one entry from the corresponding column of choices. Fill all blanks in the way that best completes the text.";

  onAnswerChanged(): void {
    let answer:string = "";
    this.question.items.forEach(item => {
      item.selected == null ? answer += "N" : answer += item.selected;
    });
    this.answerChanged.emit(answer);
  }
}
