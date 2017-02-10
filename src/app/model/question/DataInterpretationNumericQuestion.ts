import {NumericQuestion} from "./NumericQuestion";
import {DataInterpretationSetQuestionItem} from "./DataInterpretationSetQuestionItem";
/**
 * Created by Yubar on 1/27/2017.
 */

export class DataInterpretationNumericQuestion extends NumericQuestion implements DataInterpretationSetQuestionItem{

  number:number;

  type(): string {
    return "numeric-answer";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number:number): void {
    this.number = number;
  }

  copy(question: DataInterpretationNumericQuestion): void {
    super.copy(question);
    this.number = question.number;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.number = this.number;
    return ret;
  }
}
