import {Choice} from "../../../../questions-module/model/Choice";
import {MultipleAnswerChoiceQuestion} from "../../../../questions-module/model/MultipleAnswerChoiceQuestion";
import {InnerQuestion} from "./InnerQuestion";
import {ReadingComprehensionQuestion} from "./ReadingComprehensionQuestion";
/**
 * Created by Yubar on 1/13/2017.
 */

export class ReadingComprehensionMultipleAnswerQuestion extends MultipleAnswerChoiceQuestion implements InnerQuestion<ReadingComprehensionQuestion>{

  number:number;
  private parent:ReadingComprehensionQuestion;

  constructor(text:string = "") {
    super(text, 3);
  }

  type(): string {
    return "multiple-answer";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number: number): void {
    this.number = number;
  }

  getParent(): ReadingComprehensionQuestion {
    return this.parent;
  }

  setParent(parent: ReadingComprehensionQuestion): void {
    this.parent = parent;
  }

  pushChoice(choice:Choice = new Choice(this.choices.length)): void {
    if (this.choices.length >= 3)
      throw new Error("Operation not valid.");
    else
      super.pushChoice(choice);
  }

  popChoice(): Choice {
    throw new Error("Operation not valid.");
  }

  copy(question: ReadingComprehensionMultipleAnswerQuestion) :void  {
    super.copy(question);
    this.number = question.number;
    this.parent = new ReadingComprehensionQuestion();
    if (question.parent)
      this.parent.copy(question.parent);
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.number = this.number;
    return ret;
  }

}
