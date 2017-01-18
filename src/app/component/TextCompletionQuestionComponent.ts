import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
import {TextCompletionQuestion} from "../model/TextCompletionQuestion";
import {Choice} from "../model/Choice";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "text-completion-question",
  templateUrl: "../template/text-completion-question-component.html"
})
export class TextCompletionQuestionComponent extends QuestionComponent{

  @Input() question: TextCompletionQuestion = new TextCompletionQuestion();
  backup: TextCompletionQuestion = new TextCompletionQuestion();
  editingChoice: Choice;

  editChoice(text:string) {
    this.editingChoice.text = text;
    this.editingChoice = null;
  }
}
