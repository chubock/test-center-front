import {Question} from "../../../../questions-module/model/Question";
/**
 * Created by yubar on 1/8/17.
 */

export class WritingQuestion extends Question {

  type:string = "ANALYZE_AND_ISSUE";

  constructor(text: string = "", public answer:string = "") {
    super(text);
  }

  copy(question: WritingQuestion): void {
    super.copy(question);
    this.type = question.type;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.answer = this.answer;
    ret.type = this.type;
    return ret;
  }

}
