import {QuantitativeMultipleAnswerQuestionService} from "../../../service/question/QuantitativeMultipleAnswerQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {QuantitativeMultipleAnswerQuestion} from "../../../model/question/QuantitativeMultipleAnswerQuestion";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "quantitative-multiple-answer-questions",
  templateUrl: "./quantitative-multiple-answer-questions-component.html"
})
export class QuantitativeMultipleAnswerQuestionsComponent extends QuestionsComponent<QuantitativeMultipleAnswerQuestion>{

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

}
