import {Component} from "@angular/core";
import {AbstractQuestionListComponent} from "../../../../component/helper/AbstractQuestionListComponent";
import {WritingQuestion} from "../../model/WritingQuestion";
import {Page} from "../../../../../shared-module/model/Page";
import {WritingQuestionService} from "../../service/WritingQuestionService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "writing-questions",
  templateUrl: "../../../../component/helper/question-list-component.html"
})
export class WritingQuestionsComponent extends AbstractQuestionListComponent<WritingQuestion>{

  page:Page<WritingQuestion> = new Page<WritingQuestion>();
  question:WritingQuestion;

  constructor(protected questionService: WritingQuestionService) {
    super();
  }

  create(): void {
    this.question = new WritingQuestion("This is a sample Writing Question.");
  }

  get type():string {
    return "writing";
  }

}
