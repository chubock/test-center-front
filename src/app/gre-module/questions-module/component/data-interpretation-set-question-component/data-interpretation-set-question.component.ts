import {Input, Component} from "@angular/core";
import {DataInterpretationSetQuestion} from "../../model/data-interpretation-set-question";
import {DataInterpretationSetQuestionService} from "../../service/data-interpretation-set-question.service";
import {DataInterpretationNumericQuestion} from "../../model/data-interpretation-numeric-question";
import {DataInterpretationMultipleAnswerQuestion} from "../../model/data-interpretation-multiple-answer-question";
import {DataInterpretationSingleAnswerQuestion} from "../../model/data-interpretation-single-answer-question";
import {AbstractQuestionComponent} from "../abstract-question.component";
import {FileService} from "../../../../shared-module/service/file.service";

/**
 * Created by Yubar on 1/27/2017.
 */

@Component({
  selector: "data-interpretation-set-question",
  templateUrl: "./data-interpretation-set-question.component.html",
  styles: ['.btn-group li a {cursor: pointer}']
})
export class DataInterpretationSetQuestionComponent extends AbstractQuestionComponent<DataInterpretationSetQuestion> {
  @Input() question: DataInterpretationSetQuestion = new DataInterpretationSetQuestion();
  @Input() backup: DataInterpretationSetQuestion = new DataInterpretationSetQuestion();

  constructor(questionService: DataInterpretationSetQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

  addNumericQuestion(): void {
    this.question.pushQuestion(new DataInterpretationNumericQuestion());
  }

  addMultipleAnswerQuestion(): void {
    this.question.pushQuestion(new DataInterpretationMultipleAnswerQuestion());
  }

  addSingleAnswerQuestion():void {
    this.question.pushQuestion(new DataInterpretationSingleAnswerQuestion());
  }

}
