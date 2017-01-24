import {MultipleAnswerChoiceQuestion} from "./MultipleAnswerChoiceQuestion";
import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/13/2017.
 */

export class SentenceEquivalenceQuestion extends MultipleAnswerChoiceQuestion {

  maxAnswerCount:number = 2;

  constructor(text:string = "") {
    super(text, 6);
  }

  pushChoice(choice:Choice = new Choice(this.choices.length)): void {
    if (this.choices.length >= 6)
      throw new Error("Operation not valid.");
    else
      super.pushChoice(choice);
  }

  popChoice(): Choice {
    throw new Error("Operation not valid.");
  }

}
