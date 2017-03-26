import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {Component, OnInit} from "@angular/core";
import {QuantitativeMultipleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/QuantitativeMultipleAnswerQuestion";
/**
 * Created by Yubar on 3/21/2017.
 */

@Component({
  selector: "answer-quantitative-multiple-answer-question",
  templateUrl: "../answer-choice-question-component.html"
})
export class AnswerQuantitativeMultipleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<QuantitativeMultipleAnswerQuestion> {

  multipleAnswer:boolean = true;

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

}
