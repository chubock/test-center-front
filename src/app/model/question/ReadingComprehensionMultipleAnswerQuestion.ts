import {Choice} from "./Choice";
import {MultipleAnswerChoiceQuestion} from "./MultipleAnswerChoiceQuestion";
import {ReadingComprehensionQuestionItem} from "./ReadingComprehensionQuestionItem";
/**
 * Created by Yubar on 1/13/2017.
 */

export class ReadingComprehensionMultipleAnswerQuestion extends MultipleAnswerChoiceQuestion implements ReadingComprehensionQuestionItem{

  number:number;

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
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.number = this.number;
    return ret;
  }

}
