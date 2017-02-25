import {Question} from "../../../../questions-module/model/Question";
import {ReadingComprehensionQuestionItem} from "./ReadingComprehensionQuestionItem";
/**
 * Created by yubar on 1/9/17.
 */

export class SelectInPassageQuestion extends Question implements ReadingComprehensionQuestionItem{

  number:number;
  answer:number;
  selected: number;

  constructor(text:string = "") {
    super(text);
  }

  type(): string {
    return "select-in-passage";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number: number): void {
    this.number = number;
  }

  copy(question: SelectInPassageQuestion): void {
    super.copy(question);
    this.answer = question.answer;
    this.selected = question.selected;
    this.number = question.number;
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.answer = this.answer;
    ret.selected = this.selected;
    ret.number = this.number;
    return ret;
  }

}
