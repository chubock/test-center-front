import {Component, Input} from "@angular/core";
import {AbstractQuestionComponent} from "../../../../../questions-module/component/helper/AbstractQuestionComponent";
import {QuantitativeComparisonQuestion} from "../../model/QuantitativeComparisonQuestion";
import {QuantitativeComparisonQuestionService} from "../../service/QuantitativeComparisonQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "quantitative-comparison-question",
  templateUrl: "./quantitative-comparison-question-component.html"
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
