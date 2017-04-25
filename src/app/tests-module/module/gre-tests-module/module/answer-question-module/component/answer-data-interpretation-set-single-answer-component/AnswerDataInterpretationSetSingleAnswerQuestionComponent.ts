import {Component} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {DataInterpretationSingleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/DataInterpretationSingleAnswerQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-data-interpretation-set-single-answer-question",
  templateUrl: "./answer-data-interpretation-set-single-answer-question-component.html",
  styleUrls: ['./style.css']
})
export class AnswerDataInterpretationSetSingleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<DataInterpretationSingleAnswerQuestion>{

  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  onSelect(selected: number): void {
    this.question.selected == selected ? this.question.selected = null : this.question.selected = selected;
    this.onAnswerChanged();
  }
}
