import {ChoiceQuestion} from "./ChoiceQuestion";
/**
 * Created by Yubar on 1/7/2017.
 */

export class MultipleAnswerChoiceQuestion extends ChoiceQuestion{

  maxAnswerCount:number = 0;

  constructor(text: string = "", numberOfChoices: number = 3) {
    super(text, numberOfChoices);
  }

  get answers(): number[] {
    var answers = [];
    this.choices.forEach(choice => {
      if (choice.answer)
        answers.push(choice.number);
    });
    return answers;
  }

  get selects(): number[] {
    var selects = [];
    this.choices.forEach(choice => {
      if (choice.selected)
        selects.push(choice.number);
    });
    return selects;
  }

  copy(question: MultipleAnswerChoiceQuestion): void {
    super.copy(question);
    this.maxAnswerCount = question.maxAnswerCount;
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.maxAnswerCount = this.maxAnswerCount;
    return ret;
  }

}
