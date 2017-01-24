import {ReadingComprehensionMultipleAnswerQuestionService} from "../../../service/question/ReadingComprehensionMultipleAnswerQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../../model/question/ReadingComprehensionMultipleAnswerQuestion";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "reading-comprehension-multiple-answer-questions",
  templateUrl: "./reading-comprehension-multiple-answer-questions-component.html"
})
export class ReadingComprehensionMultipleAnswerQuestionsComponent extends QuestionsComponent<ReadingComprehensionMultipleAnswerQuestion>{

  page:Page<ReadingComprehensionMultipleAnswerQuestion> = new Page<ReadingComprehensionMultipleAnswerQuestion>();
  currentPage:number;
  question:ReadingComprehensionMultipleAnswerQuestion;

  constructor(protected questionService: ReadingComprehensionMultipleAnswerQuestionService) {
    super();
  }

  create(): void {
    this.question = new ReadingComprehensionMultipleAnswerQuestion("This is a simple Reading Comprehension multiple answer question");
    this.question.choices[0].text = "First Choice";
    this.question.choices[1].text = "Second Choice";
    this.question.choices[2].text = "Third Choice";
  }

}
