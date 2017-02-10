import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../../../model/question/MultipleAnswerChoiceQuestion";
import {MultipleAnswerChoiceQuestionComponent} from "../MultipleAnswerChoiceQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../../model/question/ReadingComprehensionMultipleAnswerQuestion";
import {FileService} from "../../../service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-multiple-answer-question",
  templateUrl: "../choice-question-component.html"
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
