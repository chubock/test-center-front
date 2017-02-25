import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestionComponent} from "../../../../component/helper/MultipleAnswerChoiceQuestionComponent";
import {SentenceEquivalenceQuestion} from "../../model/SentenceEquivalenceQuestion";
import {SentenceEquivalenceQuestionService} from "../../service/SentenceEquivalenceQuestionService";
import {FileService} from "../../../../../shared-module/service/FileService";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "sentence-equivalence-question",
  templateUrl: "../../../../component/helper/choice-question-component.html"
})
export class SentenceEquivalenceQuestionComponent extends MultipleAnswerChoiceQuestionComponent<SentenceEquivalenceQuestion> {

  @Input() question: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();
  backup: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();

  constructor(questionService: SentenceEquivalenceQuestionService, protected fileService: FileService) {
    super();
    this.questionService = questionService;
  }

}
