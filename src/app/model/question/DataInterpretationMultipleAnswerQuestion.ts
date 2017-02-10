import {NumericQuestion} from "./NumericQuestion";
import {QuantitativeMultipleAnswerQuestion} from "./QuantitativeMultipleAnswerQuestion";
import {DataInterpretationSetQuestionItem} from "./DataInterpretationSetQuestionItem";
/**
 * Created by Yubar on 1/27/2017.
 */

export class DataInterpretationMultipleAnswerQuestion extends QuantitativeMultipleAnswerQuestion implements DataInterpretationSetQuestionItem{
  number:number;

  type():string {
    return "multiple-answer";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number:number): void {
    this.number = number;
  }

  copy(question: DataInterpretationMultipleAnswerQuestion): void {
    super.copy(question);
    this.number = question.number;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.number = this.number;
    return ret;
  }
}
