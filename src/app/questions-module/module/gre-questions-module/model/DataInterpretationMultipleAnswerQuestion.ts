import {QuantitativeMultipleAnswerQuestion} from "./QuantitativeMultipleAnswerQuestion";
import {InnerQuestion} from "./InnerQuestion";
import {DataInterpretationSetQuestion} from "./DataInterpretationSetQuestion";
/**
 * Created by Yubar on 1/27/2017.
 */

export class DataInterpretationMultipleAnswerQuestion extends QuantitativeMultipleAnswerQuestion implements InnerQuestion<DataInterpretationSetQuestion>{

  number:number;
  private parent:DataInterpretationSetQuestion;

  type():string {
    return "multiple-answer";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number:number): void {
    this.number = number;
  }

  getParent(): DataInterpretationSetQuestion {
    return this.parent;
  }

  setParent(parent: DataInterpretationSetQuestion): void {
    this.parent = parent;
  }

  copy(question: DataInterpretationMultipleAnswerQuestion): void {
    super.copy(question);
    this.number = question.number;
    this.parent = new DataInterpretationSetQuestion();
    if (question.parent)
      this.parent.copy(question.parent);
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.number = this.number;
    return ret;
  }
}
