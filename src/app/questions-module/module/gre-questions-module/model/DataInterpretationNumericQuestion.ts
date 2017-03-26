import {NumericQuestion} from "./NumericQuestion";
import {DataInterpretationSetQuestion} from "./DataInterpretationSetQuestion";
import {InnerQuestion} from "./InnerQuestion";
/**
 * Created by Yubar on 1/27/2017.
 */

export class DataInterpretationNumericQuestion extends NumericQuestion implements InnerQuestion<DataInterpretationSetQuestion>{

  number:number;
  private parent:DataInterpretationSetQuestion;

  type(): string {
    return "numeric-answer";
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

  copy(question: DataInterpretationNumericQuestion): void {
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
