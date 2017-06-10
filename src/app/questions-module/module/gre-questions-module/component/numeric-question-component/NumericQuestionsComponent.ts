import {Component} from "@angular/core";
import {AbstractQuestionListComponent} from "../../../../component/helper/AbstractQuestionListComponent";
import {NumericQuestion} from "../../model/NumericQuestion";
import {Page} from "../../../../../shared-module/model/Page";
import {NumericQuestionService} from "../../service/NumericQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "numeric-questions",
  templateUrl: "../../../../component/helper/question-list-component.html"
})
export class NumericQuestionsComponent extends AbstractQuestionListComponent<NumericQuestion>{

  questionTypes:string[] = ["GRE_NUMERIC", "GRE_NUMERIC_FRACTION"];

  page:Page<NumericQuestion> = new Page<NumericQuestion>();
  currentPage:number;
  question:NumericQuestion;

  constructor(protected questionService: NumericQuestionService) {
    super();
  }

  create(): void {
    this.question = new NumericQuestion("This is a sample Numeric Question.");
  }

  get type():string {
    return "numeric";
  }

}
