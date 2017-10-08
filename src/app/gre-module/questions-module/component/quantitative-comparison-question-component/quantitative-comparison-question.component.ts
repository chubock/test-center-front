import {Component, Input} from "@angular/core";
import {QuantitativeComparisonQuestion} from "../../model/quantitative-comparison-question";
import {QuantitativeComparisonQuestionService} from "../../service/quantitative-comparison-question.service";
import {AbstractQuestionComponent} from "../abstract-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-comparison-question",
  templateUrl: "./quantitative-comparison-question.component.html"
})
export class QuantitativeComparisonQuestionComponent extends AbstractQuestionComponent<QuantitativeComparisonQuestion>{

  @Input() question: QuantitativeComparisonQuestion = new QuantitativeComparisonQuestion();
  backup: QuantitativeComparisonQuestion = new QuantitativeComparisonQuestion();

  constructor(questionService: QuantitativeComparisonQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

  ngOnInit():void {
    super.ngOnInit();
  }

}
