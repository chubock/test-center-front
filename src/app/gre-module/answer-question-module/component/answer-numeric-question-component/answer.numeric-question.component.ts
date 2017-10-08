import {Component} from "@angular/core";
import {AnswerQuestionComponent} from "../answer-question.component";
import {DomSanitizer} from "@angular/platform-browser";
import {NumericQuestion} from "../../../questions-module/model/numeric-question";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-numeric-question",
  templateUrl: "./answer-numeric-question.component.html",
  styleUrls: ['./style.css']
})
export class AnswerNumericQuestionComponent extends AnswerQuestionComponent<NumericQuestion>{

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }

  onAnswerChanged(): void {
    if (this.question.fraction) {
      if (this.question.nominator && this.question.denominator)
        this.answerChanged.emit(this.question.nominator + "-" + this.question.denominator);
    }
    else if (this.question.nominator)
      this.answerChanged.emit(this.question.nominator + "");
  }

}
