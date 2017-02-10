import {TextCompletionQuestionService} from "../../../service/question/TextCompletionQuestionService";
import {Component} from "@angular/core";
import {Page} from "../../../model/Page";
import {QuestionsComponent} from "../QuestionsComponent";
import {TextCompletionQuestion} from "../../../model/question/TextCompletionQuestion";
import {FileService} from "../../../service/FileService";
/**
 * Created by Yubar on 1/20/2017.
 */

@Component({
  selector: "text-completion-questions",
  templateUrl: "../questions-component.html"
})
export class TextCompletionQuestionsComponent extends QuestionsComponent<TextCompletionQuestion>{

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
