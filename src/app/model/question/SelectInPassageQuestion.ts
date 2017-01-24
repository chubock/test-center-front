import {Question} from "./Question";
/**
 * Created by yubar on 1/9/17.
 */

export class SelectInPassageQuestion extends Question {

  answer:number;
  selected: number;

  constructor(text:string = "") {
    super(text);
  }

  copy(question: SelectInPassageQuestion): void {
    super.copy(question);
    this.answer = question.answer;
    this.selected = question.selected;
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.answer = this.answer;
    ret.selected = this.selected;
    return ret;
  }

}
