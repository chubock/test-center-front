import {Question} from "./Question";
/**
 * Created by yubar on 1/8/17.
 */

export class NumericQuestion extends Question {

  nominatorAnswer:number;
  denominatorAnswer: number;

  nominator: number;
  denominator: number;

  constructor(text: string = "", public fraction:boolean = false) {
    super(text);
  }

  copy(question: NumericQuestion): void {
    
    super.copy(question);
    
    question.nominator = this.nominator;
    question.denominator = this.denominator;
    
    question.nominatorAnswer = this.nominatorAnswer;
    question.denominatorAnswer = this.denominatorAnswer;
    
  }

}
