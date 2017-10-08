import {Component, Input} from "@angular/core";
import {SentenceEquivalenceQuestion} from "../../model/sentence-equivalence-question";
import {SentenceEquivalenceQuestionService} from "../../service/sentence-equivalence-question.service";
import {MultipleAnswerChoiceQuestionComponent} from "../multiple-answer-choice-question.component";
import {FileService} from "../../../../shared-module/service/file.service";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "sentence-equivalence-question",
  templateUrl: "../choice-question.component.html"
})
export class SentenceEquivalenceQuestionComponent extends MultipleAnswerChoiceQuestionComponent<SentenceEquivalenceQuestion> {

  @Input() question: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();
  backup: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();

  constructor(questionService: SentenceEquivalenceQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

}
