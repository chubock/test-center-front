import {Component} from "@angular/core";
import {AbstractQuestionListComponent} from "../../../../component/helper/AbstractQuestionListComponent";
import {QuantitativeSingleAnswerQuestion} from "../../model/QuantitativeSingleAnswerQuestion";
import {Page} from "../../../../../shared-module/model/Page";
import {QuantitativeSingleAnswerQuestionService} from "../../service/QuantitativeSingleAnswerQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "quantitative-single-answer-questions",
  templateUrl: "../../../../component/helper/question-list-component.html"
})
export class QuantitativeSingleAnswerQuestionsComponent extends AbstractQuestionListComponent<QuantitativeSingleAnswerQuestion>{

  page:Page<QuantitativeSingleAnswerQuestion> = new Page<QuantitativeSingleAnswerQuestion>();
  currentPage:number;
  question:QuantitativeSingleAnswerQuestion;

  constructor(protected questionService: QuantitativeSingleAnswerQuestionService) {
    super();
  }

  create(): void {
    this.question = new QuantitativeSingleAnswerQuestion("This is a simple quantitative single answer question");
    this.question.choices[0].text = "First Choice";
    this.question.choices[1].text = "Second Choice";
    this.question.choices[2].text = "Third Choice";
    this.question.choices[3].text = "Fourth Choice";
    this.question.choices[4].text = "Fifth Choice";
  }

  get type():string {
    return "quantitative-single-answer";
  }

}
