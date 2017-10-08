import {Component, Input} from "@angular/core";
import {QuantitativeMultipleAnswerQuestion} from "../../model/quantitative-multiple-answer-question";
import {QuantitativeMultipleAnswerQuestionService} from "../../service/quantitative-multiple-answer-question.service";
import {MultipleAnswerChoiceQuestionComponent} from "../multiple-answer-choice-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-multiple-answer-question",
  templateUrl: "../choice-question.component.html"
})
export class QuantitativeMultipleAnswerQuestionComponent extends MultipleAnswerChoiceQuestionComponent<QuantitativeMultipleAnswerQuestion>{

  @Input() question: QuantitativeMultipleAnswerQuestion = new QuantitativeMultipleAnswerQuestion();
  backup: QuantitativeMultipleAnswerQuestion = new QuantitativeMultipleAnswerQuestion();
  dynamicMaxAnswerCount:boolean = true;

  constructor(questionService: QuantitativeMultipleAnswerQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

}
