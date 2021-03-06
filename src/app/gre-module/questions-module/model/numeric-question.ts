import {Question} from "./question";
/**
 * Created by yubar on 1/8/17.
 */

export class NumericQuestion extends Question {

  nominatorAnswer:number;
  denominatorAnswer: number;

  nominator: number;
  denominator: number;

  prefix:string;
  postfix:string;

  constructor(text: string = "", public fraction:boolean = false) {
    super(text);
  }

  copy(question: NumericQuestion): void {

    super.copy(question);

    this.nominator = question.nominator;
    this.denominator = question.denominator;

    this.fraction = question.fraction;

    this.nominatorAnswer = question.nominatorAnswer;
    this.denominatorAnswer = question.denominatorAnswer;

    this.prefix = question.prefix;
    this.postfix = question.postfix;

  }

  toJSON():any {
    let ret = super.toJSON();
    ret.nominator = this.nominator;
    ret.nominatorAnswer = this.nominatorAnswer;
    ret.fraction = this.fraction;
    ret.denominator = this.denominator;
    ret.denominatorAnswer = this.denominatorAnswer;
    ret.prefix = this.prefix;
    ret.postfix = this.postfix;
    return ret;
  }

}
