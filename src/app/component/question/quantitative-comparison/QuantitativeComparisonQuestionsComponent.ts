import {QuantitativeComparisonQuestionService} from "../../../service/question/QuantitativeComparisonQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {QuantitativeComparisonQuestion} from "../../../model/question/QuantitativeComparisonQuestion";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "quantitative-comparison-questions",
  templateUrl: "../questions-component.html"
})
export class QuantitativeComparisonQuestionsComponent extends QuestionsComponent<QuantitativeComparisonQuestion>{

  page:Page<QuantitativeComparisonQuestion> = new Page<QuantitativeComparisonQuestion>();
  currentPage:number;
  question:QuantitativeComparisonQuestion;

  constructor(protected questionService: QuantitativeComparisonQuestionService) {
    super();
  }

  create(): void {
    this.question = new QuantitativeComparisonQuestion("X + 2", "X * 2");
  }

  get type():string {
    return "quantitative-comparison";
  }

}
