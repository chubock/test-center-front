import {Component, OnInit} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/ReadingComprehensionMultipleAnswerQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-reading-comprehension-multiple-answer-question",
  templateUrl: "../answer-inner-choice-question-component.html"
})
export class AnswerReadingComprehensionMultipleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<ReadingComprehensionMultipleAnswerQuestion> {
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
