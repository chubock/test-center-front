import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestionComponent} from "../../../../component/helper/SingleAnswerChoiceQuestionComponent";
import {DataInterpretationSingleAnswerQuestion} from "../../model/DataInterpretationSingleAnswerQuestion";
import {FileService} from "../../../../../shared-module/service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "data-interpretation-single-answer-question",
  templateUrl: "../../../../component/helper/choice-question-component.html"
})
export class DataInterpretationSingleAnswerQuestionComponent extends SingleAnswerChoiceQuestionComponent<DataInterpretationSingleAnswerQuestion>{

  nested:boolean = true;
  @Input() question: DataInterpretationSingleAnswerQuestion = new DataInterpretationSingleAnswerQuestion();
  backup: DataInterpretationSingleAnswerQuestion = new DataInterpretationSingleAnswerQuestion();

  constructor(protected fileService: FileService) {
    super();
  }

  cancel(): void {
    if (confirm("Are you sure ? ")) {
      this.onDelete.emit(this.question);
    }
  }

}
