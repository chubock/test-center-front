import {Component, Input} from "@angular/core";
import {ReadingComprehensionSingleAnswerQuestion} from "../../model/reading-comprehension-single-answer-question";
import {SingleAnswerChoiceQuestionComponent} from "../single-answer-choice-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-single-answer-question",
  templateUrl: "../choice-question.component.html"
})
export class ReadingComprehensionSingleAnswerQuestionComponent extends SingleAnswerChoiceQuestionComponent<ReadingComprehensionSingleAnswerQuestion>{

  nested:boolean = true;
  @Input() question: ReadingComprehensionSingleAnswerQuestion = new ReadingComprehensionSingleAnswerQuestion();
  backup: ReadingComprehensionSingleAnswerQuestion = new ReadingComprehensionSingleAnswerQuestion();

  constructor(protected fileService: FileService) {
    super();
  }

  cancel(): void {
    if (confirm("Are you sure ? ")) {
      this.onDelete.emit(this.question);
    }
  }
}
