import {Component} from "@angular/core";
import {NumericQuestion} from "../../model/numeric-question";
import {NumericQuestionService} from "../../service/numeric-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "numeric-questions",
  templateUrl: "../question-list.component.html"
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
