import {Component} from "@angular/core";
import {DataInterpretationMultipleAnswerQuestion} from "../../../../../../../questions-module/module/gre-questions-module/model/DataInterpretationMultipleAnswerQuestion";
import {AnswerChoicesQuestionComponent} from "../AnswerChoicesQuestionComponent";
import {Choice} from "../../../../../../../questions-module/model/Choice";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "answer-data-interpretation-set-multiple-answer-question",
  templateUrl: "./answer-data-interpretation-set-multiple-answer-question-component.html",
  styleUrls: ['./style.css']
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

  answer(choice:Choice): void {
    choice.selected = !choice.selected;
    this.onAnswerChanged();
  }

}
