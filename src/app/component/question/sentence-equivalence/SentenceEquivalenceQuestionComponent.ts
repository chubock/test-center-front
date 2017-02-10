import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestionComponent} from "../MultipleAnswerChoiceQuestionComponent";
import {SentenceEquivalenceQuestion} from "../../../model/question/SentenceEquivalenceQuestion";
import {SentenceEquivalenceQuestionService} from "../../../service/question/SentenceEquivalenceQuestionService";
import {FileService} from "../../../service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "sentence-equivalence-question",
  templateUrl: "../choice-question-component.html"
})
export class SentenceEquivalenceQuestionComponent extends MultipleAnswerChoiceQuestionComponent<SentenceEquivalenceQuestion> {

  @Input() question: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();
  backup: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();

  constructor(questionService: SentenceEquivalenceQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

}
