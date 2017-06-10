import {Component} from "@angular/core";
import {QuantitativeComparisonQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/QuantitativeComparisonQuestion";
import {AnswerQuestionComponent} from "../AnswerQuestionComponent";
import {DomSanitizer} from "@angular/platform-browser";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-quantitative-comparison-question",
  templateUrl: "./answer-quantitative-comparison-question-component.html",
  styleUrls: ['./style.css']
})
export class AnswerQuantitativeComparisonQuestionComponent extends AnswerQuestionComponent<QuantitativeComparisonQuestion>{

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }

  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  onSelect(selected: number): void {
    if (this.mode == "ANSWER"){
      this.question.selected == selected ? this.question.selected = null : this.question.selected = selected;
      this.onAnswerChanged();
    }
  }

}
