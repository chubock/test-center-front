import {Question} from "./Question";
/**
 * Created by Yubar on 1/12/2017.
 */

export class QuantitativeComparisonQuestion extends Question {

  answer:number;
  selected:number;

  constructor(text:string = "", public quantityB:string = "") {
    super(text);
  }

  copy(question: QuantitativeComparisonQuestion):void {
    super.copy(question);
    this.quantityB = question.quantityB;
    this.selected = question.selected;
    this.answer = question.answer;
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.quantityB = this.quantityB;
    ret.answer = this.answer;
    ret.selected = this.selected;
    return ret;
  }

}
