import {Component, Input} from "@angular/core";
import {DataInterpretationSingleAnswerQuestion} from "../../model/data-interpretation-single-answer-question";
import {SingleAnswerChoiceQuestionComponent} from "../single-answer-choice-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "data-interpretation-single-answer-question",
  templateUrl: "../choice-question.component.html"
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
