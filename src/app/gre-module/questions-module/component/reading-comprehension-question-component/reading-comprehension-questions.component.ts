import {Component} from "@angular/core";
import {ReadingComprehensionQuestion} from "../../model/reading-comprehension-question";
import {ReadingComprehensionQuestionService} from "../../service/reading-comprehension-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "reading-comprehension-questions",
  templateUrl: "../question-list.component.html"
})
export class ReadingComprehensionQuestionsComponent extends AbstractQuestionListComponent<ReadingComprehensionQuestion>{
  questionTypes:string[]= ["GRE_READING_COMPREHENSION_LONG", "GRE_READING_COMPREHENSION_MEDIUM", "GRE_READING_COMPREHENSION_SHORT", "GRE_READING_COMPREHENSION_PARAGRAPH_ARGUMENT"];

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
