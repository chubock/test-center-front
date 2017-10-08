import {Component} from "@angular/core";
import {AnswerQuestionComponent} from "../answer-question.component";
import {DomSanitizer} from "@angular/platform-browser";
import {TextCompletionQuestion} from "../../../questions-module/model/text-completion-question";
import {TextCompletionQuestionItem} from "../../../questions-module/model/text-completion-question-item";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-text-completion-question",
  templateUrl: "./answer-text-completion-question.component.html",
  styleUrls: ['./style.css']
})
export class AnswerTextCompletionQuestionComponent extends AnswerQuestionComponent<TextCompletionQuestion> {

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }


  onAnswerChanged(): void {
    let answer:string = "";
    this.question.items.forEach(item => {
      item.selected == null ? answer += "N" : answer += item.selected;
    });
    this.answerChanged.emit(answer);
  }

  answer(item:TextCompletionQuestionItem, choice:number):void {
    if (this.mode == 'ANSWER'){
      item.selected == choice ? item.selected = null : item.selected = choice;
      this.onAnswerChanged();
    }
  }
}
