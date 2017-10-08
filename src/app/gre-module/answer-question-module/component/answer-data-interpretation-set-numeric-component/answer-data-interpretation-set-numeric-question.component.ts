import {Component} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {AnswerQuestionComponent} from "../answer-question.component";
import {DataInterpretationNumericQuestion} from "../../../questions-module/model/data-interpretation-numeric-question";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-data-interpretation-set-numeric-question",
  templateUrl: "./answer-data-interpretation-set-numeric-question.component.html",
  styleUrls: ['./style.css']
})
export class AnswerDataInterpretationSetNumericQuestionComponent extends AnswerQuestionComponent<DataInterpretationNumericQuestion>{

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }

  onAnswerChanged(): void {
    if (this.question.fraction)
      this.answerChanged.emit(this.question.nominator + "-" + this.question.denominator);
    else
      this.answerChanged.emit(this.question.nominator + "");
  }
}
