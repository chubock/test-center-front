import {Question} from "../../../../questions-module/model/Question";
/**
 * Created by yubar on 1/8/17.
 */

export class WritingQuestion extends Question {

  type:string = "ANALYZE_AND_ISSUE";
  description:string;

  questionTypes:string[] =["GRE_WRITING_ARGUMENT", "GRE_WRITING_ISSUE"];

  constructor(text: string = "", public answer:string = "") {
    super(text);
  }

  copy(question: WritingQuestion): void {
    super.copy(question);
    this.type = question.type;
    this.description = question.description;
    this.answer = question.answer;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.answer = this.answer;
    ret.type = this.type;
    ret.description = this.description;
    return ret;
  }

}
