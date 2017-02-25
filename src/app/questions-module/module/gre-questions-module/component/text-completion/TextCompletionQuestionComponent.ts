import {Component, Input} from "@angular/core";
import {AbstractQuestionComponent} from "../../../../../questions-module/component/helper/AbstractQuestionComponent";
import {TextCompletionQuestion} from "../../model/TextCompletionQuestion";
import {Choice} from "../../../../../questions-module/model/Choice";
import {TextCompletionQuestionService} from "../../service/TextCompletionQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
import {AlertsService} from "../../../../../shared-module/service/AlertsService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "text-completion-question",
  templateUrl: "text-completion-question-component.html"
})
export class TextCompletionQuestionComponent extends AbstractQuestionComponent<TextCompletionQuestion>{

  @Input() question: TextCompletionQuestion = new TextCompletionQuestion();
  backup: TextCompletionQuestion = new TextCompletionQuestion();
  editingChoice: Choice;

  constructor(questionService: TextCompletionQuestionService, protected fileService: FileService, protected alertsService:AlertsService) {
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

  save(): void {
    this.questionService.save(this.question).then((question) => {
      question.prepare();
      this.backup = question;
      this.cancel();
      this.onSave.emit(question);
    });
  }
}
