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

  direction:string = "Directions: Enter your answer as an integer or a decimal if there is a single answer box OR as a fraction if there are two separate boxes — one for the numerator and one for the denominator.";

  onAnswerChanged(): void {
    if (this.question.fraction)
      this.answerChanged.emit(this.question.nominator + "-" + this.question.denominator);
    else
      this.answerChanged.emit(this.question.nominator + "");
  }

}
