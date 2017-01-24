/**
 * Created by Yubar on 1/5/2017.
 */

export class Question {

  id:number;
  difficulty:string="MEDIUM";

  constructor(public text:string = "") {}

  copy(question: Question): void {
    this.id = question.id;
    this.text = question.text;
    this.difficulty = question.difficulty;
  }

  toJSON(): any{
    return {id: this.id, text: this.text, difficulty: this.difficulty};
  }
}
