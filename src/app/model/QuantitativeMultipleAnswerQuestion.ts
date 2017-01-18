import {SingleAnswerChoiceQuestion} from "./SingleAnswerChoiceQuestion";
import {Choice} from "./Choice";
import {MultipleAnswerChoiceQuestion} from "./MultipleAnswerChoiceQuestion";
/**
 * Created by Yubar on 1/13/2017.
 */

export class QuantitativeMultipleAnswerQuestion extends MultipleAnswerChoiceQuestion {

  constructor(text:string = "") {
    super(text, 3);
  }

}