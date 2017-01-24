import {NumericQuestionService} from "../../../service/question/NumericQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {NumericQuestion} from "../../../model/question/NumericQuestion";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "numeric-questions",
  templateUrl: "./numeric-questions-component.html"
})
export class NumericQuestionsComponent extends QuestionsComponent<NumericQuestion>{

  page:Page<NumericQuestion> = new Page<NumericQuestion>();
  currentPage:number;
  question:NumericQuestion;

  constructor(protected questionService: NumericQuestionService) {
    super();
  }

  create(): void {
    this.question = new NumericQuestion("This is a sample Numeric Question.");
  }

}
