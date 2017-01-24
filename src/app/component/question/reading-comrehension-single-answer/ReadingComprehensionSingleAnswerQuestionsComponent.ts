import {ReadingComprehensionSingleAnswerQuestionService} from "../../../service/question/ReadingComprehensionSingleAnswerQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {ReadingComprehensionSingleAnswerQuestion} from "../../../model/question/ReadingComprehensionSingleAnswerQuestion";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "reading-comprehension-single-answer-questions",
  templateUrl: "./reading-comprehension-single-answer-questions-component.html"
})
export class ReadingComprehensionSingleAnswerQuestionsComponent extends QuestionsComponent<ReadingComprehensionSingleAnswerQuestion>{

  page:Page<ReadingComprehensionSingleAnswerQuestion> = new Page<ReadingComprehensionSingleAnswerQuestion>();
  currentPage:number;
  question:ReadingComprehensionSingleAnswerQuestion;

  constructor(protected questionService: ReadingComprehensionSingleAnswerQuestionService) {
    super();
  }

  create(): void {
    this.question = new ReadingComprehensionSingleAnswerQuestion("This is a simple Reading Comprehension single answer question");
    this.question.choices[0].text = "First Choice";
    this.question.choices[1].text = "Second Choice";
    this.question.choices[2].text = "Third Choice";
    this.question.choices[3].text = "Fourth Choice";
    this.question.choices[4].text = "Fifth Choice";
  }

}
