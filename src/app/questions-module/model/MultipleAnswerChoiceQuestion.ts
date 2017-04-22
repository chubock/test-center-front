import {ChoiceQuestion} from "./ChoiceQuestion";
/**
 * Created by Yubar on 1/7/2017.
 */

export class MultipleAnswerChoiceQuestion extends ChoiceQuestion{

  maxAnswerCount:number = 0;

  constructor(text: string = "", numberOfChoices: number = 3) {
    super(text, numberOfChoices);
  }

  getState():string {
    if (this.maxAnswerCount) {
      if (this.selects.length && this.selects.length != this.maxAnswerCount)
        return "Incomplete";
    } else if (this.selects.length)
      return "Answered";
    else
      return super.getState();
  }

  get answers(): number[] {
    let answers = [];
    this.choices.forEach((choice, index) => {
      if (choice.answer)
        answers.push(index);
    });
    return answers;
  }

  get selects(): number[] {
    let selects = [];
    this.choices.forEach((choice, index) => {
      if (choice.selected)
        selects.push(index);
    });
    return selects;
  }

  copy(question: MultipleAnswerChoiceQuestion): void {
    super.copy(question);
    this.maxAnswerCount = question.maxAnswerCount;
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.maxAnswerCount = this.maxAnswerCount;
    return ret;
  }

}
