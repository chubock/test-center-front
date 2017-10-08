import {Component} from "@angular/core";
import {QuantitativeComparisonQuestion} from "../../model/quantitative-comparison-question";
import {QuantitativeComparisonQuestionService} from "../../service/quantitative-comparison-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "quantitative-comparison-questions",
  templateUrl: "../question-list.component.html"
})
export class QuantitativeComparisonQuestionsComponent extends AbstractQuestionListComponent<QuantitativeComparisonQuestion>{

  page:Page<QuantitativeComparisonQuestion> = new Page<QuantitativeComparisonQuestion>();
  currentPage:number;
  question:QuantitativeComparisonQuestion;

  constructor(protected questionService: QuantitativeComparisonQuestionService) {
    super();
  }

  create(): void {
    this.question = new QuantitativeComparisonQuestion("", "X + 2", "X * 2");
  }

  get type():string {
    return "quantitative-comparison";
  }

}
