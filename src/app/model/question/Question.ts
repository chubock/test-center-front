/**
 * Created by Yubar on 1/5/2017.
 */

export class Question {

  id:number;
  difficulty:string="MEDIUM";
  image:number;

  constructor(public text:string = "") {}

  copy(question: Question): void {
    this.id = question.id;
    this.text = question.text;
    this.difficulty = question.difficulty;
    this.image = question.image;
  }

  toJSON(): any{
    return {id: this.id, text: this.text, difficulty: this.difficulty, image: this.image};
  }
}
