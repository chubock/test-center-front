import {Component} from "@angular/core";
import {NumericQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/NumericQuestion";
import {AnswerQuestionComponent} from "../AnswerQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-numeric-question",
  templateUrl: "./answer-numeric-question-component.html"
})
export class AnswerNumericQuestionComponent extends AnswerQuestionComponent<NumericQuestion>{

  onAnswerChanged(): void {
    if (this.question.fraction)
      this.answerChanged.emit(this.question.nominator + "-" + this.question.denominator);
    else
      this.answerChanged.emit(this.question.nominator + "");
  }

}
