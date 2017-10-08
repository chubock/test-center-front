import {Input, Component} from "@angular/core";
import {ReadingComprehensionQuestion} from "../../model/reading-comprehension-question";
import {ReadingComprehensionQuestionService} from "../../service/reading-comprehension-question.service";
import {SelectInPassageQuestion} from "../../model/select-in-passage-question";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../model/reading-comprehension-multiple-answer-question";
import {ReadingComprehensionSingleAnswerQuestion} from "../../model/reading-comprehension-single-answer-question";
import {AbstractQuestionComponent} from "../abstract-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/27/2017.
 */

@Component({
  selector: "reading-comprehension-question",
  templateUrl: "./reading-comprehension-question.component.html",
  styles: ['.btn-group li a {cursor: pointer}']
})
export class ReadingComprehensionQuestionComponent extends AbstractQuestionComponent<ReadingComprehensionQuestion> {
  @Input() question: ReadingComprehensionQuestion = new ReadingComprehensionQuestion();
  @Input() backup: ReadingComprehensionQuestion = new ReadingComprehensionQuestion();

  constructor(questionService: ReadingComprehensionQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

  addSelectInPassageQuestion(): void {
    this.question.pushQuestion(new SelectInPassageQuestion());
  }

  addMultipleAnswerQuestion(): void {
    this.question.pushQuestion(new ReadingComprehensionMultipleAnswerQuestion());
  }

  addSingleAnswerQuestion():void {
    this.question.pushQuestion(new ReadingComprehensionSingleAnswerQuestion());
  }

}
