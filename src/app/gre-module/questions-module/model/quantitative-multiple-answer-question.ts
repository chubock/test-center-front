import {MultipleAnswerChoiceQuestion} from "./multiple-answer-choice-question";
/**
 * Created by Yubar on 1/13/2017.
 */

export class QuantitativeMultipleAnswerQuestion extends MultipleAnswerChoiceQuestion {

  number:number;

  constructor(text:string = "") {
    super(text, 3);
  }

}
