/**
 * Created by Yubar on 1/5/2017.
 */

export class Question {
  constructor(public text:string = "") {}

  copy(question: Question): void {
    question.text = this.text;
  }
}
