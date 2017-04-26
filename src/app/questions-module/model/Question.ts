/**
 * Created by Yubar on 1/5/2017.
 */

export class Question {

  id:number;
  number:number;
  difficulty:string = "MEDIUM";
  difficultyLevel:string = "LEVEL3";
  image:number;
  questionType:string;
  seen:boolean = false;
  marked:boolean = false;
  free:boolean = false;

  constructor(public text:string = "") {}

  getState():string {
    if (! this.seen)
      return "Not Answered";
    else return "Answered";
  }

  copy(question: Question): void {
    this.id = question.id;
    this.number = question.number;
    this.text = question.text;
    this.difficulty = question.difficulty;
    this.difficultyLevel = question.difficultyLevel;
    this.image = question.image;
    this.questionType = question.questionType;
    this.free = question.free;
    this.seen = question.seen;
    this.marked = question.marked;
  }

  prepare():void {

  }

  toJSON(): any{
    return {id: this.id, number: this.number, text: this.text, difficulty: this.difficulty, difficultyLevel: this.difficultyLevel, image: this.image, questionType: this.questionType, seen: this.seen, marked: this.marked, free: this.free};
  }
}
