import {AnswerChoicesQuestionComponent} from "../answer-choices-question.component";
import {Component} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {QuantitativeMultipleAnswerQuestion} from "../../../questions-module/model/quantitative-multiple-answer-question";
import {Choice} from "../../../questions-module/model/choice";
/**
 * Created by Yubar on 3/21/2017.
 */

@Component({
  selector: "answer-quantitative-multiple-answer-question",
  templateUrl: "./answer-quantitative-multiple-answer-question.component.html",
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
