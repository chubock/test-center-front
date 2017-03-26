import {Component} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {DataInterpretationNumericQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/DataInterpretationNumericQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-data-interpretation-set-numeric-question",
  templateUrl: "./answer-data-interpretation-set-numeric-question-component.html"
})
export class AnswerDataInterpretationSetNumericQuestionComponent extends AnswerChoicesQuestionComponent<DataInterpretationNumericQuestion>{

  onAnswerChanged(): void {
    if (this.question.fraction)
      this.answerChanged.emit(this.question.nominator + "-" + this.question.denominator);
    else
      this.answerChanged.emit(this.question.nominator + "");
  }
}
