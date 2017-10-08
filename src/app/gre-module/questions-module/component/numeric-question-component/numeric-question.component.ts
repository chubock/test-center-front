import {Component, Input} from "@angular/core";
import {NumericQuestion} from "../../model/numeric-question";
import {NumericQuestionService} from "../../service/numeric-question.service";
import {AbstractQuestionComponent} from "../abstract-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
import {AlertsService} from "../../../../shared-module/service/alerts.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "numeric-question",
  templateUrl: "./numeric-question.component.html"
})
export class NumericQuestionComponent extends AbstractQuestionComponent<NumericQuestion>{
  @Input() question: NumericQuestion = new NumericQuestion();
  @Input() backup: NumericQuestion = new NumericQuestion();

  constructor(questionService: NumericQuestionService, protected fileService: FileService, protected alertsService:AlertsService) {
    super();
    this.questionService = questionService;
  }
}
