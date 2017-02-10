import {Component, Input} from "@angular/core";
import {QuestionComponent} from "../QuestionComponent";
import {NumericQuestion} from "../../../model/question/NumericQuestion";
import {NumericQuestionService} from "../../../service/question/NumericQuestionService";
import {FileService} from "../../../service/FileService";
import {AlertsService} from "../../../service/AlertsService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "numeric-question",
  templateUrl: "./numeric-question-component.html"
})
export class NumericQuestionComponent extends QuestionComponent<NumericQuestion>{
  @Input() question: NumericQuestion = new NumericQuestion();
  @Input() backup: NumericQuestion = new NumericQuestion();

  constructor(questionService: NumericQuestionService, protected fileService: FileService, protected alertsService:AlertsService) {
    super();
    this.questionService = questionService;
  }
}
