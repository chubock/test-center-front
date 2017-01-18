import {Component, Input, OnInit} from "@angular/core";
import {SingleAnswerChoiceQuestion} from "../model/SingleAnswerChoiceQuestion";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
import {SingleAnswerChoiceQuestionComponent} from "./SingleAnswerChoiceQuestionComponent";
import {QuantitativeComparisonQuestion} from "../model/QuantitativeComparisonQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-comparison-question",
  templateUrl: "../template/quantitative-comparison-question-component.html"
})
export class QuantitativeComparisonQuestionComponent extends SingleAnswerChoiceQuestionComponent{

  @Input() question: QuantitativeComparisonQuestion = new QuantitativeComparisonQuestion();
  backup: QuantitativeComparisonQuestion = new QuantitativeComparisonQuestion();

  ngOnInit():void {
    super.ngOnInit();
    if (this.dynamicChoices)
      throw new Error("Invalid Attribute");
  }

  get editableChoices():boolean {
    return false;
  }
}
