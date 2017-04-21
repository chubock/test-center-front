import {Question} from "../../../../questions-module/model/Question";
/**
 * Created by Yubar on 1/12/2017.
 */

export class QuantitativeComparisonQuestion extends Question {

  answer:number;
  selected:number;

  constructor(text:string = "",public quantityA:string ="", public quantityB:string = "") {
    super(text);
  }

  copy(question: QuantitativeComparisonQuestion):void {
    super.copy(question);
    this.quantityA = question.quantityA;
    this.quantityB = question.quantityB;
    this.selected = question.selected;
    this.answer = question.answer;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.quantityA = this.quantityA;
    ret.quantityB = this.quantityB;
    ret.answer = this.answer;
    ret.selected = this.selected;
    return ret;
  }

}
