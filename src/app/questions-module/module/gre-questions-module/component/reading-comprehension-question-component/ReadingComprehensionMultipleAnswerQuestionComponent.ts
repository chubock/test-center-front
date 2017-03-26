import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestionComponent} from "../../../../component/helper/MultipleAnswerChoiceQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../model/ReadingComprehensionMultipleAnswerQuestion";
import {MultipleAnswerChoiceQuestion} from "../../../../../questions-module/model/MultipleAnswerChoiceQuestion";
import {FileService} from "../../../../../shared-module/service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-multiple-answer-question",
  templateUrl: "../../../../component/helper/choice-question-component.html"
})
export class ReadingComprehensionMultipleAnswerQuestionComponent extends MultipleAnswerChoiceQuestionComponent<ReadingComprehensionMultipleAnswerQuestion>{

  nested:boolean = true;
  @Input() question: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  backup: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();

  constructor(protected fileService: FileService) {
    super();
  }

  cancel(): void {
    if (confirm("Are you sure ? ")) {
      this.onDelete.emit(this.question);
    }
  }
}
