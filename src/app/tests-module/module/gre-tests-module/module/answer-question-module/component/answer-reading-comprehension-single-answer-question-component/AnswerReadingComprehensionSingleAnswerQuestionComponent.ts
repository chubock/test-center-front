import {Component} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {ReadingComprehensionSingleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/ReadingComprehensionSingleAnswerQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-reading-comprehension-single-answer-question",
  templateUrl: "../answer-inner-choice-question-component.html"
})
export class AnswerReadingComprehensionSingleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<ReadingComprehensionSingleAnswerQuestion>{

  onAnswerChanged(): void {
    if (this.question.selected != null)
      this.answerChanged.emit(this.question.selected + "");
  }

  onSelect(selected: number): void {
    this.question.selected = selected;
    this.onAnswerChanged();
  }

}
