import {Component} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../answer-choices-question.component";
import {DomSanitizer} from "@angular/platform-browser";
import {DataInterpretationSingleAnswerQuestion} from "../../../questions-module/model/data-interpretation-single-answer-question";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-data-interpretation-set-single-answer-question",
  templateUrl: "./answer-data-interpretation-set-single-answer-question.ccomponent.html",
  styleUrls: ['./style.css']
})
export class AnswerDataInterpretationSetSingleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<DataInterpretationSingleAnswerQuestion>{

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }

  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  onSelect(selected: number): void {
    if (this.mode == 'ANSWER'){
      this.question.selected == selected ? this.question.selected = null : this.question.selected = selected;
      this.onAnswerChanged();
    }
  }
}
