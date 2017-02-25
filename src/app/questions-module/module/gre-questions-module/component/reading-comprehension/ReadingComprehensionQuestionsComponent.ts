import {Component} from "@angular/core";
import {AbstractQuestionListComponent} from "../../../../component/helper/AbstractQuestionListComponent";
import {ReadingComprehensionQuestion} from "../../model/ReadingComprehensionQuestion";
import {Page} from "../../../../../shared-module/model/Page";
import {ReadingComprehensionQuestionService} from "../../service/ReadingComprehensionQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "reading-comprehension-questions",
  templateUrl: "../../../../component/helper/question-list-component.html"
})
export class ReadingComprehensionQuestionsComponent extends AbstractQuestionListComponent<ReadingComprehensionQuestion>{

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
