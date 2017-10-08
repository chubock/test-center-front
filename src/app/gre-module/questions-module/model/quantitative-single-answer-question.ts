import {SingleAnswerChoiceQuestion} from "./single-answer-choice-question";
import {Choice} from "./choice";
/**
 * Created by Yubar on 1/13/2017.
 */

export class QuantitativeSingleAnswerQuestion extends SingleAnswerChoiceQuestion {

  number:number;

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
