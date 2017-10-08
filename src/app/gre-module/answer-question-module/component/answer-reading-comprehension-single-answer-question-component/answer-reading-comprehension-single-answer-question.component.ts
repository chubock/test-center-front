import {Component} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../answer-choices-question.component";
import {DomSanitizer} from "@angular/platform-browser";
import {ReadingComprehensionSingleAnswerQuestion} from "../../../questions-module/model/reading-comprehension-single-answer-question";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-reading-comprehension-single-answer-question",
  templateUrl: "./answer-reading-comprehension-single-answer-question.component.html",
  styleUrls: ['./style.css']
})
export class AnswerReadingComprehensionSingleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<ReadingComprehensionSingleAnswerQuestion>{

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
