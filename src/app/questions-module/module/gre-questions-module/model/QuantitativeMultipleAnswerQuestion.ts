import {MultipleAnswerChoiceQuestion} from "../../../../questions-module/model/MultipleAnswerChoiceQuestion";
/**
 * Created by Yubar on 1/13/2017.
 */

export class QuantitativeMultipleAnswerQuestion extends MultipleAnswerChoiceQuestion {

  number:number;

  constructor(text:string = "") {
    super(text, 3);
  }

}
