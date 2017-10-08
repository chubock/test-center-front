import {Component} from "@angular/core";
import {QuantitativeMultipleAnswerQuestion} from "../../model/quantitative-multiple-answer-question";
import {QuantitativeMultipleAnswerQuestionService} from "../../service/quantitative-multiple-answer-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "quantitative-multiple-answer-questions",
  templateUrl: "../question-list.component.html"
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
