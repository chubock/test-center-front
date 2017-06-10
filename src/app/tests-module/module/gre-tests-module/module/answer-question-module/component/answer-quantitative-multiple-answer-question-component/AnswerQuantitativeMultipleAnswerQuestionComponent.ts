import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {Component, OnInit} from "@angular/core";
import {QuantitativeMultipleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/QuantitativeMultipleAnswerQuestion";
import {Choice} from "../../../../../../../questions-module/model/Choice";
import {DomSanitizer} from "@angular/platform-browser";
/**
 * Created by Yubar on 3/21/2017.
 */

@Component({
  selector: "answer-quantitative-multiple-answer-question",
  templateUrl: "./answer-quantitative-multiple-answer-question-component.html",
  styleUrls: ['./style.css']
})
export class AnswerQuantitativeMultipleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<QuantitativeMultipleAnswerQuestion> {

  multipleAnswer:boolean = true;

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }

  onAnswerChanged(): void {
    let answer:string = "";
    this.question.choices.forEach((choice, index) => {
      if (choice.selected)
        answer += index;
    });
    this.answerChanged.emit(answer);
  }

  onChange(state:boolean, number:number) {
    this.question.choices[number].selected = state;
    this.onAnswerChanged();
  }

  answer(choice:Choice):void {
    if (this.mode =='ANSWER'){
      choice.selected = ! choice.selected;
      this.onAnswerChanged();
    }
  }

}
