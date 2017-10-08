import {Component} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../answer-choices-question.component";
import {DomSanitizer} from "@angular/platform-browser";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../../questions-module/model/reading-comprehension-multiple-answer-question";
import {Choice} from "../../../questions-module/model/choice";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-reading-comprehension-multiple-answer-question",
  templateUrl: "./answer-reading-comprehension-multiple-answer-question.component.html",
  styleUrls: ['./style.css']
})
export class AnswerReadingComprehensionMultipleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<ReadingComprehensionMultipleAnswerQuestion> {
  multipleAnswer:boolean = true;

  constructor(sanitizer:DomSanitizer){
    super(sanitizer);
  }

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

  answer(choice:Choice): void {
    if (this.mode == 'ANSWER') {
      choice.selected = !choice.selected;
      this.onAnswerChanged();
    }
  }
}
