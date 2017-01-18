import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./MultipleAnswerChoiceQuestionComponent";
import {SingleAnswerChoiceQuestionComponent} from "./SingleAnswerChoiceQuestionComponent";
import {ReadingComprehensionSingleAnswerQuestion} from "../model/ReadingComprehensionSingleAnswerQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-single-answer-question",
  templateUrl: "../template/choice-question-component.html"
})
export class ReadingComprehensionSingleAnswerQuestionComponent extends SingleAnswerChoiceQuestionComponent{

  @Input() question: ReadingComprehensionSingleAnswerQuestion = new ReadingComprehensionSingleAnswerQuestion();
  backup: ReadingComprehensionSingleAnswerQuestion = new ReadingComprehensionSingleAnswerQuestion();

  ngOnInit():void {
    super.ngOnInit();
    if (this.dynamicChoices)
      throw new Error("Invalid Attribute");
  }
}
