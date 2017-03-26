import {Component} from "@angular/core";
import {QuantitativeComparisonQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/QuantitativeComparisonQuestion";
import {AnswerQuestionComponent} from "../AnswerQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-quantitative-comparison-question",
  templateUrl: "./answer-quantitative-comparison-question-component.html"
})
export class AnswerQuantitativeComparisonQuestionComponent extends AnswerQuestionComponent<QuantitativeComparisonQuestion>{

  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  onSelect(selected: number): void {
    this.question.selected = selected;
    this.onAnswerChanged();
  }

}
