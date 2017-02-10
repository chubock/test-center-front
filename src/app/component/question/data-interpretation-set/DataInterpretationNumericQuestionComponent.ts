import {Component, Input} from "@angular/core";
import {QuestionComponent} from "../QuestionComponent";
import {NumericQuestion} from "../../../model/question/NumericQuestion";
import {NumericQuestionService} from "../../../service/question/NumericQuestionService";
import {FileService} from "../../../service/FileService";
import {DataInterpretationNumericQuestion} from "../../../model/question/DataInterpretationNumericQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "data-interpretation-numeric-question",
  templateUrl: "../numeric/numeric-question-component.html"
})
export class DataInterpretationNumericQuestionComponent extends QuestionComponent<DataInterpretationNumericQuestion>{
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
