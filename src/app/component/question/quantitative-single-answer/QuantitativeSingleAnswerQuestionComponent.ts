import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestionComponent} from "../SingleAnswerChoiceQuestionComponent";
import {QuantitativeSingleAnswerQuestion} from "../../../model/question/QuantitativeSingleAnswerQuestion";
import {QuantitativeSingleAnswerQuestionService} from "../../../service/question/QuantitativeSingleAnswerQuestionService";
import {FileService} from "../../../service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-single-answer-question",
  templateUrl: "../choice-question-component.html"
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
