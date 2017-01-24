import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../../model/question/MultipleAnswerChoiceQuestion";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "multiple-answer-choice-question",
  templateUrl: "./choice-question-component.html"
})
export class MultipleAnswerChoiceQuestionComponent<T extends MultipleAnswerChoiceQuestion> extends ChoiceQuestionComponent<MultipleAnswerChoiceQuestion>{

  @Input() question: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  backup: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  multipleChoice:boolean = true;

}
