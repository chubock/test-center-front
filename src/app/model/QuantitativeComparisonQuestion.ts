import {SingleAnswerChoiceQuestion} from "./SingleAnswerChoiceQuestion";
import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/12/2017.
 */

export class QuantitativeComparisonQuestion extends SingleAnswerChoiceQuestion {

  constructor(text:string = "", public quantityB:string = "") {
    super(text, 0);
    this.pushChoice(new Choice(0, "Quantity A is greater."));
    this.pushChoice(new Choice(1, "Quantity B is greater."));
    this.pushChoice(new Choice(2, "The two quantities are equal."));
    this.pushChoice(new Choice(3, "The relationship cannot be determined from the information given."));
  }

  pushChoice(choice:Choice = new Choice(this.choices.length)): void {
    if (this.choices.length >= 4)
      throw new Error("Operation not valid.");
    else
      super.pushChoice(choice);
  }

  popChoice(): Choice {
    throw new Error("Operation not valid.");
  }

  copy(question: QuantitativeComparisonQuestion):void {
    super.copy(question);
    question.quantityB = this.quantityB;
  }

}
