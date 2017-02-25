import {Component} from "@angular/core";
import {AbstractQuestionListComponent} from "../../../../component/helper/AbstractQuestionListComponent";
import {QuantitativeMultipleAnswerQuestion} from "../../model/QuantitativeMultipleAnswerQuestion";
import {Page} from "../../../../../shared-module/model/Page";
import {QuantitativeMultipleAnswerQuestionService} from "../../service/QuantitativeMultipleAnswerQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "quantitative-multiple-answer-questions",
  templateUrl: "../../../../component/helper/question-list-component.html"
})
export class QuantitativeMultipleAnswerQuestionsComponent extends AbstractQuestionListComponent<QuantitativeMultipleAnswerQuestion>{

  page:Page<QuantitativeMultipleAnswerQuestion> = new Page<QuantitativeMultipleAnswerQuestion>();
  currentPage:number;
  question:QuantitativeMultipleAnswerQuestion;

  constructor(protected questionService: QuantitativeMultipleAnswerQuestionService) {
    super();
  }

  create(): void {
    this.question = new QuantitativeMultipleAnswerQuestion("This is a simple quantitative multiple answer question");
    this.question.choices[0].text = "First Choice";
    this.question.choices[1].text = "Second Choice";
    this.question.choices[2].text = "Third Choice";
  }

  get type():string {
    return "quantitative-multiple-answer";
  }

}
