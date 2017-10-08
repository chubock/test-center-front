import {Component, Input} from "@angular/core";
import {QuantitativeSingleAnswerQuestion} from "../../model/quantitative-single-answer-question";
import {QuantitativeSingleAnswerQuestionService} from "../../service/quantitative-single-answer-question.service";
import {SingleAnswerChoiceQuestionComponent} from "../single-answer-choice-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-single-answer-question",
  templateUrl: "../choice-question.component.html"
})
export class QuantitativeSingleAnswerQuestionComponent extends SingleAnswerChoiceQuestionComponent<QuantitativeSingleAnswerQuestion>{

  @Input() question: QuantitativeSingleAnswerQuestion = new QuantitativeSingleAnswerQuestion();
  backup: QuantitativeSingleAnswerQuestion = new QuantitativeSingleAnswerQuestion();

  constructor(questionService: QuantitativeSingleAnswerQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

  ngOnInit():void {
    super.ngOnInit();
  }
}
