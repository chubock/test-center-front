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
  marked:boolean = false;
  free:boolean = false;
  status:string;
  document:number;
  score:number;
  comment:string;

  constructor(public text:string = "") {}

  getState():string {
    if (this.status == "NOT_SEEN")
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
    this.marked = question.marked;
    this.status = question.status;
    this.document = question.document;
    this.score = question.score;
    this.comment = question.comment;
  }

  prepare():void {

  }

  toJSON(): any{
    return {id: this.id, number: this.number, text: this.text, difficulty: this.difficulty, difficultyLevel: this.difficultyLevel, image: this.image, questionType: this.questionType, marked: this.marked, free: this.free, status: this.status, document: this.document, score: this.score, comment: this.comment};
  }
}
