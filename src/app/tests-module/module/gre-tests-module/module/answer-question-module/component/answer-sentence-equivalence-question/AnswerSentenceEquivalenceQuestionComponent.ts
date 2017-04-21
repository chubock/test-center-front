import {Component, OnInit} from "@angular/core";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {SentenceEquivalenceQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/SentenceEquivalenceQuestion";
import {Choice} from "../../../../../../../questions-module/model/Choice";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-sentence-equivalence-question",
  templateUrl: "./answer-sentence-equivalence-question-component.html",
  styleUrls: ['./style.css']
})
export class AnswerSentenceEquivalenceQuestionComponent extends AnswerChoicesQuestionComponent<SentenceEquivalenceQuestion> {
  multipleAnswer:boolean = true;
  direction:string = "Directions: Select the two answer choices that, when used to complete the sentence, fit the meaning of the sentence as a whole and produce completed sentences that are alike in meaning.";

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

  answer(choice:Choice):void {
    choice.selected = ! choice.selected;
    this.onAnswerChanged();
  }
}
