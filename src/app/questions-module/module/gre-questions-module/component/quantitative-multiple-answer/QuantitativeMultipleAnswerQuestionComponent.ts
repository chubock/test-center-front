import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestionComponent} from "../../../../component/helper/MultipleAnswerChoiceQuestionComponent";
import {QuantitativeMultipleAnswerQuestion} from "../../model/QuantitativeMultipleAnswerQuestion";
import {QuantitativeMultipleAnswerQuestionService} from "../../service/QuantitativeMultipleAnswerQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-multiple-answer-question",
  templateUrl: "../../../../component/helper/choice-question-component.html"
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
