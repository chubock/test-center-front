import {Component, Input} from "@angular/core";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../model/reading-comprehension-multiple-answer-question";
import {MultipleAnswerChoiceQuestionComponent} from "../multiple-answer-choice-question.component";
import {MultipleAnswerChoiceQuestion} from "../../model/multiple-answer-choice-question";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-multiple-answer-question",
  templateUrl: "../choice-question.component.html"
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
