import {Component, Input} from "@angular/core";
import {MultipleAnswerChoiceQuestion} from "../model/MultipleAnswerChoiceQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {Question} from "../model/Question";
import {ChoiceQuestionComponent} from "./ChoiceQuestionComponent";
import {MultipleAnswerChoiceQuestionComponent} from "./MultipleAnswerChoiceQuestionComponent";
import {SentenceEquivalenceQuestion} from "../model/SentenceEquivalenceQuestion";
/**
 * Created by Yubar on 1/5/2017.
 */


@Component({
  selector: "sentence-equivalence-question",
  templateUrl: "../template/choice-question-component.html"
})
export class SentenceEquivalenceQuestionComponent extends MultipleAnswerChoiceQuestionComponent{

  @Input() question: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();
  backup: SentenceEquivalenceQuestion = new SentenceEquivalenceQuestion();

  ngOnInit():void {
    super.ngOnInit();
    if (this.dynamicChoices)
      throw new Error("Invalid Attribute");
  }
}
