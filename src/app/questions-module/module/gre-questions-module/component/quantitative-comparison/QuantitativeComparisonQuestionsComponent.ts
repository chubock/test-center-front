import {Component} from "@angular/core";
import {AbstractQuestionListComponent} from "../../../../component/helper/AbstractQuestionListComponent";
import {QuantitativeComparisonQuestion} from "../../model/QuantitativeComparisonQuestion";
import {Page} from "../../../../../shared-module/model/Page";
import {QuantitativeComparisonQuestionService} from "../../service/QuantitativeComparisonQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "quantitative-comparison-questions",
  templateUrl: "../../../../component/helper/question-list-component.html"
})
export class QuantitativeComparisonQuestionsComponent extends AbstractQuestionListComponent<QuantitativeComparisonQuestion>{

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
