import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestionComponent} from "../MultipleAnswerChoiceQuestionComponent";
import {QuantitativeMultipleAnswerQuestion} from "../../../model/question/QuantitativeMultipleAnswerQuestion";
import {QuantitativeMultipleAnswerQuestionService} from "../../../service/question/QuantitativeMultipleAnswerQuestionService";
import {FileService} from "../../../service/FileService";
import {DataInterpretationMultipleAnswerQuestion} from "../../../model/question/DataInterpretationMultipleAnswerQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "data-interpretation-multiple-answer-question",
  templateUrl: "../choice-question-component.html"
})
export class DataInterpretationMultipleAnswerQuestionComponent extends MultipleAnswerChoiceQuestionComponent<DataInterpretationMultipleAnswerQuestion>{

  nested:boolean = true;
  @Input() question: DataInterpretationMultipleAnswerQuestion = new DataInterpretationMultipleAnswerQuestion();
  backup: DataInterpretationMultipleAnswerQuestion = new DataInterpretationMultipleAnswerQuestion();
  dynamicMaxAnswerCount:boolean = true;

  constructor(protected fileService: FileService) {
    super();
  }

  cancel(): void {
    if (confirm("Are you sure ? ")) {
      this.onDelete.emit(this.question);
    }
  }

}
