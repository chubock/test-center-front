/**
 * Created by Yubar on 1/5/2017.
 */

export class Question {

  fileId:number ;

  constructor(public text:string = "") {}

  copy(question: Question): void {
    question.text = this.text;
  }
}
