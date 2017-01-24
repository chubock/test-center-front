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

    this.nominator = question.nominator;
    this.denominator = question.denominator;

    this.fraction = question.fraction;

    this.nominatorAnswer = question.nominatorAnswer;
    this.denominatorAnswer = question.denominatorAnswer;

  }

  toJSON():any {
    var ret = super.toJSON();
    ret.nominator = this.nominator;
    ret.nominatorAnswer = this.nominatorAnswer;
    ret.fraction = this.fraction;
    ret.denominator = this.denominator;
    ret.denominatorAnswer = this.denominatorAnswer;
    return ret;
  }

}
