import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./MultipleAnswerChoiceQuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-multiple-answer-question",
  templateUrl: "../template/choice-question-component.html"
})
export class ReadingComprehensionMultipleAnswerQuestionComponent extends MultipleAnswerChoiceQuestionComponent{

  @Input() question: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  backup: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();

  ngOnInit():void {
    super.ngOnInit();
    if (this.dynamicChoices)
      throw new Error("Invalid Attribute");
  }
}
