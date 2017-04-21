import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {Component} from "@angular/core";
import {QuantitativeSingleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/QuantitativeSingleAnswerQuestion";
/**
 * Created by Yubar on 3/21/2017.
 */

@Component({
  selector: "answer-quantitative-single-answer-question",
  templateUrl: "./answer-quantitative-single-answer-question-component.html",
  styleUrls: ['./style.css']
})
export class AnswerQuantitativeSingleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<QuantitativeSingleAnswerQuestion> {

  direction:string = "Directions: Select a single answer choice.";

  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  onSelect(selected: number): void {
    this.question.selected == selected ? this.question.selected = null : this.question.selected = selected;
    this.onAnswerChanged();
  }
}
