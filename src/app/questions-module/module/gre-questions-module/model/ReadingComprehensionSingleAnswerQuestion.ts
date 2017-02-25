import {SingleAnswerChoiceQuestion} from "../../../../questions-module/model/SingleAnswerChoiceQuestion";
import {Choice} from "../../../../questions-module/model/Choice";
import {ReadingComprehensionQuestionItem} from "./ReadingComprehensionQuestionItem";
/**
 * Created by Yubar on 1/13/2017.
 */

export class ReadingComprehensionSingleAnswerQuestion extends SingleAnswerChoiceQuestion implements ReadingComprehensionQuestionItem{

  number:number;

  constructor(text:string = "") {
    super(text, 5);
  }

  type(): string {
    return "single-answer";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number: number): void {
    this.number = number;
  }

  pushChoice(choice:Choice = new Choice(this.choices.length)): void {
    if (this.choices.length >= 5)
      throw new Error("Operation not valid.");
    else
      super.pushChoice(choice);
  }

  popChoice(): Choice {
    throw new Error("Operation not valid.");
  }

  copy(question: ReadingComprehensionSingleAnswerQuestion) :void  {
    super.copy(question);
    this.number = question.number;
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.number = this.number;
    return ret;
  }
}
