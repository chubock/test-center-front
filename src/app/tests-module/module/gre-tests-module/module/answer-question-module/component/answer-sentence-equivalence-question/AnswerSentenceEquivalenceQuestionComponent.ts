import {Component, OnInit} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {SentenceEquivalenceQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/SentenceEquivalenceQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-sentence-equivalence-question",
  templateUrl: "../answer-choice-question-component.html"
})
export class AnswerSentenceEquivalenceQuestionComponent extends AnswerChoicesQuestionComponent<SentenceEquivalenceQuestion> {
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
