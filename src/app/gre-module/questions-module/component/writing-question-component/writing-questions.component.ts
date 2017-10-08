import {Component} from "@angular/core";
import {WritingQuestion} from "../../model/writing-question";
import {WritingQuestionService} from "../../service/writing-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "writing-questions",
  templateUrl: "../question-list.component.html"
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
