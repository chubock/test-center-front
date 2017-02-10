import {NumericQuestion} from "./NumericQuestion";
import {QuantitativeSingleAnswerQuestion} from "./QuantitativeSingleAnswerQuestion";
import {DataInterpretationSetQuestionItem} from "./DataInterpretationSetQuestionItem";
/**
 * Created by Yubar on 1/27/2017.
 */

export class DataInterpretationSingleAnswerQuestion extends QuantitativeSingleAnswerQuestion implements DataInterpretationSetQuestionItem{
  number:number;

  type():string {
    return "single-answer";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number:number): void {
    this.number = number;
  }

  copy(question: DataInterpretationSingleAnswerQuestion): void {
    super.copy(question);
    this.number = question.number;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.number = this.number;
    return ret;
  }
}
