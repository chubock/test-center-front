import {Component, Input} from "@angular/core";
import {DataInterpretationNumericQuestion} from "../../model/data-interpretation-numeric-question";
import {FileService} from "../../../../shared-module/service/file.service";
import {AbstractQuestionComponent} from "../abstract-question.component";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "data-interpretation-numeric-question",
  templateUrl: "../numeric-question-component/numeric-question.component.html"
})
export class DataInterpretationNumericQuestionComponent extends AbstractQuestionComponent<DataInterpretationNumericQuestion>{
  nested:boolean = true;
  @Input() question: DataInterpretationNumericQuestion = new DataInterpretationNumericQuestion();
  @Input() backup: DataInterpretationNumericQuestion = new DataInterpretationNumericQuestion();

  constructor(protected fileService: FileService) {
    super();
  }

  cancel(): void {
    if (confirm("Are you sure ? ")) {
      this.onDelete.emit(this.question);
    }
  }

}
