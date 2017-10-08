import {Component} from "@angular/core";
import {TextCompletionQuestion} from "../../model/text-completion-question";
import {TextCompletionQuestionService} from "../../service/text-completion-question.service";
import {AbstractQuestionListComponent} from "../abstract-question-list.component";
import {Page} from "../../../../shared-module/model/page";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "text-completion-questions",
  templateUrl: "../question-list.component.html"
})
export class TextCompletionQuestionsComponent extends AbstractQuestionListComponent<TextCompletionQuestion>{

  page:Page<TextCompletionQuestion> = new Page<TextCompletionQuestion>();
  currentPage:number;
  question:TextCompletionQuestion;

  constructor(protected questionService: TextCompletionQuestionService, protected fileService: FileService) {
    super();
  }

  create(): void {
    this.question = new TextCompletionQuestion("Sample Text Completion Question");
    this.question.items[0].choices[0].text = "First";
    this.question.items[0].choices[1].text = "Second";
    this.question.items[0].choices[2].text = "Third";
    this.question.items[0].choices[3].text = "Fourth";
    this.question.items[0].choices[4].text = "Fifth";
    this.question.items[0].answer = 0;
  }

  get type():string {
    return "text-completion";
  }

}
