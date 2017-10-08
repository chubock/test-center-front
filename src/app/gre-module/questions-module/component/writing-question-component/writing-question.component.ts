import {Component, Input} from "@angular/core";
import {WritingQuestion} from "../../model/writing-question";
import {WritingQuestionService} from "../../service/writing-question.service";
import {AbstractQuestionComponent} from "../abstract-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
import {AlertsService} from "../../../../shared-module/service/alerts.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "writing-question",
  templateUrl: "./writing-question.component.html"
})
export class WritingQuestionComponent extends AbstractQuestionComponent<WritingQuestion>{
  @Input() question: WritingQuestion = new WritingQuestion();
  @Input() backup: WritingQuestion = new WritingQuestion();

  constructor(questionService: WritingQuestionService, protected fileService: FileService, protected alertsService:AlertsService) {
    super();
    this.questionService = questionService;
  }
}
