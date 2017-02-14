import {Question} from "./Question";
/**
 * Created by yubar on 1/8/17.
 */

export class WritingQuestion extends Question {

  taskType:string = "ANALYZE_AND_ISSUE";

  constructor(text: string = "", public answer:string = "") {
    super(text);
  }

  copy(question: WritingQuestion): void {
    super.copy(question);
    this.taskType = question.taskType;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.answer = this.answer;
    ret.taskType = this.taskType;
    return ret;
  }

}
