import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestionComponent} from "../SingleAnswerChoiceQuestionComponent";
import {QuantitativeComparisonQuestion} from "../../../model/question/QuantitativeComparisonQuestion";
import {QuantitativeComparisonQuestionService} from "../../../service/question/QuantitativeComparisonQuestionService";
import {QuestionComponent} from "../QuestionComponent";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-comparison-question",
  templateUrl: "./quantitative-comparison-question-component.html"
})
export class QuantitativeComparisonQuestionComponent extends QuestionComponent<QuantitativeComparisonQuestion>{

  @Input() question: QuantitativeComparisonQuestion = new QuantitativeComparisonQuestion();
  backup: QuantitativeComparisonQuestion = new QuantitativeComparisonQuestion();

  constructor(questionService: QuantitativeComparisonQuestionService) {
    super();
    this.questionService = questionService;
  }

  ngOnInit():void {
    super.ngOnInit();
  }

}
