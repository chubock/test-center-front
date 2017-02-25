import {Input, Component} from "@angular/core";
import {AbstractQuestionComponent} from "../../../../../questions-module/component/helper/AbstractQuestionComponent";
import {ReadingComprehensionQuestion} from "../../model/ReadingComprehensionQuestion";
import {ReadingComprehensionQuestionService} from "../../service/ReadingComprehensionQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
import {SelectInPassageQuestion} from "../../model/SelectInPassageQuestion";
import {DataInterpretationMultipleAnswerQuestion} from "../../model/DataInterpretationMultipleAnswerQuestion";
import {DataInterpretationSingleAnswerQuestion} from "../../model/DataInterpretationSingleAnswerQuestion";
/**
 * Created by Yubar on 1/27/2017.
 */

@Component({
  selector: "reading-comprehension-question",
  templateUrl: "reading-comprehension-question-component.html",
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
    this.question.pushQuestion(new DataInterpretationMultipleAnswerQuestion());
  }

  addSingleAnswerQuestion():void {
    this.question.pushQuestion(new DataInterpretationSingleAnswerQuestion());
  }

}
