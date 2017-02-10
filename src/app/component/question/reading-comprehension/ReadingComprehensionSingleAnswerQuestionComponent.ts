import {Component, Input, Inject} from "@angular/core";
import {SingleAnswerChoiceQuestionComponent} from "../SingleAnswerChoiceQuestionComponent";
import {ReadingComprehensionSingleAnswerQuestion} from "../../../model/question/ReadingComprehensionSingleAnswerQuestion";
import {FileService} from "../../../service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-single-answer-question",
  templateUrl: "../choice-question-component.html"
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
