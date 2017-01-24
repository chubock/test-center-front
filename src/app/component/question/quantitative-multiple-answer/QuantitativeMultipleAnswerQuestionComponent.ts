import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestionComponent} from "../MultipleAnswerChoiceQuestionComponent";
import {QuantitativeMultipleAnswerQuestion} from "../../../model/question/QuantitativeMultipleAnswerQuestion";
import {QuantitativeMultipleAnswerQuestionService} from "../../../service/question/QuantitativeMultipleAnswerQuestionService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-multiple-answer-question",
  templateUrl: "../choice-question-component.html"
})
export class QuantitativeMultipleAnswerQuestionComponent extends MultipleAnswerChoiceQuestionComponent<QuantitativeMultipleAnswerQuestion>{

  @Input() question: QuantitativeMultipleAnswerQuestion = new QuantitativeMultipleAnswerQuestion();
  backup: QuantitativeMultipleAnswerQuestion = new QuantitativeMultipleAnswerQuestion();
  dynamicMaxAnswerCount:boolean = true;

  constructor(questionService: QuantitativeMultipleAnswerQuestionService) {
    super();
    this.questionService = questionService;
  }

}
