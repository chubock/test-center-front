import {SingleAnswerChoiceQuestion} from "./SingleAnswerChoiceQuestion";
import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/13/2017.
 */

export class QuantitativeSingleAnswerQuestion extends SingleAnswerChoiceQuestion {

  constructor(text:string = "") {
    super(text, 5);
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
}
