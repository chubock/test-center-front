import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../../../model/question/MultipleAnswerChoiceQuestion";
import {MultipleAnswerChoiceQuestionComponent} from "../MultipleAnswerChoiceQuestionComponent";
import {ReadingComprehensionMultipleAnswerQuestion} from "../../../model/question/ReadingComprehensionMultipleAnswerQuestion";
import {ReadingComprehensionMultipleAnswerQuestionService} from "../../../service/question/ReadingComprehensionMultipleAnswerQuestionService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "reading-comprehension-multiple-answer-question",
  templateUrl: "../choice-question-component.html"
})
export class ReadingComprehensionMultipleAnswerQuestionComponent extends MultipleAnswerChoiceQuestionComponent<ReadingComprehensionMultipleAnswerQuestion>{

  @Input() question: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();
  backup: MultipleAnswerChoiceQuestion = new MultipleAnswerChoiceQuestion();

  constructor(questionService: ReadingComprehensionMultipleAnswerQuestionService) {
    super();
    this.questionService = questionService;
  }

  ngOnInit():void {
    super.ngOnInit();
  }
}
