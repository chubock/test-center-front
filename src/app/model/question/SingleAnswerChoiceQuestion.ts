import {ChoiceQuestion} from "./ChoiceQuestion";
/**
 * Created by Yubar on 1/7/2017.
 */

export class SingleAnswerChoiceQuestion extends ChoiceQuestion {

  selected: number;
  answer: number;

  constructor(text: string = "", numberOfChoices: number = 3) {
    super(text, numberOfChoices);
  }

  copy(question: SingleAnswerChoiceQuestion) :void  {
    super.copy(question);
    this.selected = question.selected;
    this.answer = question.answer;
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.choices = this.choices;
    ret.choices.forEach(choice => {
      choice.answer = false;
      choice.selected = false;
    });
    if (this.answer)
      ret.choices[this.answer].answer = true;
    if (this.selected)
      ret.choices[this.selected].selected = true;
    return ret;
  }

  prepare():void {
    this.choices.forEach((choice, index) => {
      if (choice.answer)
        this.answer = index;
      if (choice.selected)
        this.selected = index;
    });
  }

}
