import {Choice} from "./Choice";
import {MultipleAnswerChoiceQuestion} from "./MultipleAnswerChoiceQuestion";
/**
 * Created by Yubar on 1/13/2017.
 */

export class ReadingComprehensionMultipleAnswerQuestion extends MultipleAnswerChoiceQuestion {

  constructor(text:string = "") {
    super(text, 3);
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
}
