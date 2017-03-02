import {Component, Input} from "@angular/core";
import {AbstractQuestionComponent} from "../../../../../questions-module/component/helper/AbstractQuestionComponent";
import {WritingQuestion} from "../../model/WritingQuestion";
import {WritingQuestionService} from "../../service/WritingQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
import {AlertsService} from "../../../../../shared-module/service/AlertsService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "writing-question",
  templateUrl: "./writing-question-component.html"
})
export class WritingQuestionComponent extends AbstractQuestionComponent<WritingQuestion>{
  @Input() question: WritingQuestion = new WritingQuestion();
  @Input() backup: WritingQuestion = new WritingQuestion();

  constructor(questionService: WritingQuestionService, protected fileService: FileService, protected alertsService:AlertsService) {
    super();
    this.questionService = questionService;
  }
}
