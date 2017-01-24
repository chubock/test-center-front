import {Component, Input} from "@angular/core";
import {QuestionComponent} from "../QuestionComponent";
import {TextCompletionQuestion} from "../../../model/question/TextCompletionQuestion";
import {Choice} from "../../../model/question/Choice";
import {TextCompletionQuestionService} from "../../../service/question/TextCompletionQuestionService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "text-completion-question",
  templateUrl: "./text-completion-question-component.html"
})
export class TextCompletionQuestionComponent extends QuestionComponent<TextCompletionQuestion>{

  @Input() question: TextCompletionQuestion = new TextCompletionQuestion();
  backup: TextCompletionQuestion = new TextCompletionQuestion();
  editingChoice: Choice;

  constructor(questionService: TextCompletionQuestionService) {
    super();
    this.questionService = questionService;
  }

  ngOnInit():void {
    this.question.items.forEach(item => item.prepare());
    super.ngOnInit();
  }

  editChoice(text:string) {
    this.editingChoice.text = text;
    this.editingChoice = null;
  }
}
