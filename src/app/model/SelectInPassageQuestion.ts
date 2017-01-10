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
    question.answer = this.answer;
    question.selected = this.selected;
  }

}
