import {AnswerChoicesQuestionComponent} from "../answer-choices-question.component";
import {Component} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {QuantitativeSingleAnswerQuestion} from "../../../questions-module/model/quantitative-single-answer-question";
/**
 * Created by Yubar on 3/21/2017.
 */

@Component({
  selector: "answer-quantitative-single-answer-question",
  templateUrl: "./answer-quantitative-single-answer-question.component.html",
  styleUrls: ['./style.css']
})
export class AnswerQuantitativeSingleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<QuantitativeSingleAnswerQuestion> {

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }


  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  onSelect(selected: number): void {
    if (this.mode == 'ANSWER'){
      this.question.selected == selected ? this.question.selected = null : this.question.selected = selected;
      this.onAnswerChanged();
    }
  }
}
