import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./MultipleAnswerChoiceQuestionComponent";
import {QuantitativeMultipleAnswerQuestion} from "../model/QuantitativeMultipleAnswerQuestion";
import {SingleAnswerChoiceQuestionComponent} from "./SingleAnswerChoiceQuestionComponent";
import {QuantitativeSingleAnswerQuestion} from "../model/QuantitativeSingleAnswerQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-single-answer-question",
  templateUrl: "../template/choice-question-component.html"
})
export class QuantitativeSingleAnswerQuestionComponent extends SingleAnswerChoiceQuestionComponent{

  @Input() question: QuantitativeSingleAnswerQuestion = new QuantitativeSingleAnswerQuestion();
  backup: QuantitativeSingleAnswerQuestion = new QuantitativeSingleAnswerQuestion();

  ngOnInit():void {
    super.ngOnInit();
    if (this.dynamicChoices)
      throw new Error("Invalid Attribute");
  }
}
