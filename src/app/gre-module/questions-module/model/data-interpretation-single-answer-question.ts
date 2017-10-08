import {QuantitativeSingleAnswerQuestion} from "./quantitative-single-answer-question";
import {InnerQuestion} from "./inner-question";
import {DataInterpretationSetQuestion} from "./data-interpretation-set-question";
/**
 * Created by Yubar on 1/27/2017.
 */

export class DataInterpretationSingleAnswerQuestion extends QuantitativeSingleAnswerQuestion implements InnerQuestion<DataInterpretationSetQuestion>{

  number:number;
  private parent:DataInterpretationSetQuestion;

  type():string {
    return "single-answer";
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

  copy(question: DataInterpretationSingleAnswerQuestion): void {
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
