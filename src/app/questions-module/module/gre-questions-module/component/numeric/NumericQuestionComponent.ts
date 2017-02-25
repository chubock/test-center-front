import {Component, Input} from "@angular/core";
import {AbstractQuestionComponent} from "../../../../../questions-module/component/helper/AbstractQuestionComponent";
import {NumericQuestion} from "../../model/NumericQuestion";
import {NumericQuestionService} from "../../service/NumericQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
import {AlertsService} from "../../../../../shared-module/service/AlertsService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "numeric-question",
  templateUrl: "numeric-question-component.html"
})
export class NumericQuestionComponent extends AbstractQuestionComponent<NumericQuestion>{
  @Input() question: NumericQuestion = new NumericQuestion();
  @Input() backup: NumericQuestion = new NumericQuestion();

  constructor(questionService: NumericQuestionService, protected fileService: FileService, protected alertsService:AlertsService) {
    super();
    this.questionService = questionService;
  }
}
