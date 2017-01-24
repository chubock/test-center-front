import {SelectInPassageQuestionService} from "../../../service/question/SelectInPassageQuestionService";
import {Component} from "@angular/core";
import {SelectInPassageQuestion} from "../../../model/question/SelectInPassageQuestion";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "select-in-passage-questions",
  templateUrl: "./select-in-passage-questions-component.html"
})
export class SelectInPassageQuestionsComponent extends QuestionsComponent<SelectInPassageQuestion>{

  page:Page<SelectInPassageQuestion> = new Page<SelectInPassageQuestion>();
  currentPage:number;
  question:SelectInPassageQuestion;

  constructor(protected questionService: SelectInPassageQuestionService) {
    super();
  }

  create(): void {
    this.question = new SelectInPassageQuestion("<p><u>This</u> is a sample <u>Select In Passage </u>Question</p>");
    this.question.answer = 1;
  }

}
