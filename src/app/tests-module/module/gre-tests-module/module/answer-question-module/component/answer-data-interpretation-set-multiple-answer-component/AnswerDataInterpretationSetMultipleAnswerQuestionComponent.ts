import {Component, OnInit} from "@angular/core";
import {DataInterpretationMultipleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/DataInterpretationMultipleAnswerQuestion";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-data-interpretation-set-multiple-answer-question",
  templateUrl: "../answer-inner-choice-question-component.html"
})
export class AnswerDataInterpretationSetMultipleAnswerQuestionComponent extends AnswerChoicesQuestionComponent<DataInterpretationMultipleAnswerQuestion> {

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
