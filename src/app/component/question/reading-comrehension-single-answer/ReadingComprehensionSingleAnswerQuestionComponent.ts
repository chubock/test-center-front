import {Component, Input} from "@angular/core";
import {SingleAnswerChoiceQuestionComponent} from "../SingleAnswerChoiceQuestionComponent";
import {ReadingComprehensionSingleAnswerQuestion} from "../../../model/question/ReadingComprehensionSingleAnswerQuestion";
import {ReadingComprehensionSingleAnswerQuestionService} from "../../../service/question/ReadingComprehensionSingleAnswerQuestionService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-single-answer-question",
  templateUrl: "../choice-question-component.html"
})
export class ReadingComprehensionSingleAnswerQuestionComponent extends SingleAnswerChoiceQuestionComponent<ReadingComprehensionSingleAnswerQuestion>{

  @Input() question: ReadingComprehensionSingleAnswerQuestion = new ReadingComprehensionSingleAnswerQuestion();
  backup: ReadingComprehensionSingleAnswerQuestion = new ReadingComprehensionSingleAnswerQuestion();

  constructor(questionService: ReadingComprehensionSingleAnswerQuestionService) {
    super();
    this.questionService = questionService;
  }

  ngOnInit():void {
    super.ngOnInit();
  }
}
