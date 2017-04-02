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

  constructor(public text:string = "") {}

  copy(question: Question): void {
    this.id = question.id;
    this.number = question.number;
    this.text = question.text;
    this.difficulty = question.difficulty;
    this.difficultyLevel = question.difficultyLevel;
    this.image = question.image;
    this.questionType = question.questionType;
  }

  prepare():void {

  }

  toJSON(): any{
    return {id: this.id, number: this.number, text: this.text, difficulty: this.difficulty, difficultyLevel: this.difficultyLevel, image: this.image, questionType: this.questionType};
  }
}
