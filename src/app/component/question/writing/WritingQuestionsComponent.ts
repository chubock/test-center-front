import {WritingQuestionService} from "../../../service/question/WritingQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {WritingQuestion} from "../../../model/question/WritingQuestion";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "writing-questions",
  templateUrl: "./writing-questions-component.html"
})
export class WritingQuestionsComponent extends QuestionsComponent<WritingQuestion>{

  page:Page<WritingQuestion> = new Page<WritingQuestion>();
  currentPage:number;
  question:WritingQuestion;

  constructor(protected questionService: WritingQuestionService) {
    super();
  }

  create(): void {
    this.question = new WritingQuestion("This is a sample Writing Question.");
  }

}
