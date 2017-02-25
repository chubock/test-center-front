import {Input, Component} from "@angular/core";
import {AbstractQuestionComponent} from "../../../../../questions-module/component/helper/AbstractQuestionComponent";
import {DataInterpretationSetQuestion} from "../../model/DataInterpretationSetQuestion";
import {DataInterpretationSetQuestionService} from "../../service/DataInterpretationSetQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
import {DataInterpretationNumericQuestion} from "../../model/DataInterpretationNumericQuestion";
import {DataInterpretationMultipleAnswerQuestion} from "../../model/DataInterpretationMultipleAnswerQuestion";
import {DataInterpretationSingleAnswerQuestion} from "../../model/DataInterpretationSingleAnswerQuestion";

/**
 * Created by Yubar on 1/27/2017.
 */

@Component({
  selector: "data-interpretation-set-question",
  templateUrl: "data-interpretation-set-question-component.html",
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
