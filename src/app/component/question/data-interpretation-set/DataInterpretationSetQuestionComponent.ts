import {QuestionComponent} from "../QuestionComponent";
import {DataInterpretationSetQuestion} from "../../../model/question/DataInterpretationSetQuestion";
import {Input, Component} from "@angular/core";
import {DataInterpretationSetQuestionService} from "../../../service/question/DataInterpretationSetQuestionService";
import {FileService} from "../../../service/FileService";
import {DataInterpretationNumericQuestion} from "../../../model/question/DataInterpretationNumericQuestion";
import {DataInterpretationMultipleAnswerQuestion} from "../../../model/question/DataInterpretationMultipleAnswerQuestion";
import {DataInterpretationSingleAnswerQuestion} from "../../../model/question/DataInterpretationSingleAnswerQuestion";
/**
 * Created by Yubar on 1/27/2017.
 */

@Component({
  selector: "data-interpretation-set-question",
  templateUrl: "./data-interpretation-set-question-component.html",
  styles: ['.btn-group li a {cursor: pointer}']
})
export class DataInterpretationSetQuestionComponent extends QuestionComponent<DataInterpretationSetQuestion> {
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
