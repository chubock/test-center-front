import {Component, Input} from "@angular/core";
import {WritingQuestion} from "../../../model/question/WritingQuestion";
import {QuestionComponent} from "../QuestionComponent";
import {WritingQuestionService} from "../../../service/question/WritingQuestionService";
import {FileService} from "../../../service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "writing-question",
  templateUrl: "./writing-question-component.html"
})
export class WritingQuestionComponent extends QuestionComponent<WritingQuestion>{
  @Input() question: WritingQuestion = new WritingQuestion();
  @Input() backup: WritingQuestion = new WritingQuestion();

  constructor(questionService: WritingQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }
}
