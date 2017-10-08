import {Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/multiple-answer-choice-question";
import {AbstractChoiceQuestionComponent} from "./abstract-choice-question.component";
/**
 * Created by Yubar on 1/5/2017.
 */

export class MultipleAnswerChoiceQuestionComponent<T extends MultipleAnswerChoiceQuestion> extends AbstractChoiceQuestionComponent<MultipleAnswerChoiceQuestion>{

  @Input() question: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  backup: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  multipleChoice:boolean = true;

}
