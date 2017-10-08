import {Component, Input} from "@angular/core";
import {TextCompletionQuestion} from "../../model/text-completion-question";
import {TextCompletionQuestionService} from "../../service/text-completion-question.service";
import {AbstractQuestionComponent} from "../abstract-question.component";
import {Choice} from "../../model/choice";
import {FileService} from "../../../../shared-module/service/file.service";
import {AlertsService} from "../../../../shared-module/service/alerts.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "text-completion-question",
  templateUrl: "./text-completion-question.component.html"
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
