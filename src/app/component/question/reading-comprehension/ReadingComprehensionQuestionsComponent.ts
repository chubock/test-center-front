import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {ReadingComprehensionQuestion} from "../../../model/question/ReadingComprehensionQuestion";
import {ReadingComprehensionQuestionService} from "../../../service/question/ReadingComprehensionQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "reading-comprehension-questions",
  templateUrl: "../questions-component.html"
})
export class ReadingComprehensionQuestionsComponent extends QuestionsComponent<ReadingComprehensionQuestion>{

  page:Page<ReadingComprehensionQuestion> = new Page<ReadingComprehensionQuestion>();
  currentPage:number;
  question:ReadingComprehensionQuestion;

  constructor(protected questionService: ReadingComprehensionQuestionService) {
    super();
  }

  create(): void {
    this.question = new ReadingComprehensionQuestion("This is a sample Reading Comprehension Question.");
  }

  get type():string {
    return "reading-comprehension";
  }

}
