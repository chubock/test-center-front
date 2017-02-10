import {QuestionComponent} from "../QuestionComponent";
import {ReadingComprehensionQuestion} from "../../../model/question/ReadingComprehensionQuestion";
import {Input, Component} from "@angular/core";
import {ReadingComprehensionQuestionService} from "../../../service/question/ReadingComprehensionQuestionService";
import {FileService} from "../../../service/FileService";
import {DataInterpretationMultipleAnswerQuestion} from "../../../model/question/DataInterpretationMultipleAnswerQuestion";
import {DataInterpretationSingleAnswerQuestion} from "../../../model/question/DataInterpretationSingleAnswerQuestion";
import {SelectInPassageQuestion} from "../../../model/question/SelectInPassageQuestion";
/**
 * Created by Yubar on 1/27/2017.
 */

@Component({
  selector: "reading-comprehension-question",
  templateUrl: "./reading-comprehension-question-component.html",
  styles: ['.btn-group li a {cursor: pointer}']
})
export class ReadingComprehensionQuestionComponent extends QuestionComponent<ReadingComprehensionQuestion> {
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
    this.question.pushQuestion(new DataInterpretationMultipleAnswerQuestion());
  }

  addSingleAnswerQuestion():void {
    this.question.pushQuestion(new DataInterpretationSingleAnswerQuestion());
  }

}
