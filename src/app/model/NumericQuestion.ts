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

}
