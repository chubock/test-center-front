import {Question} from "./Question";
import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/5/2017.
 */

export class ChoiceQuestion extends Question{
  private _choices: Choice[] = [];

  constructor(text:string = "", numberOfChoices: number = 3) {
    super(text);
    for (var i=0; i<numberOfChoices; i++)
      this.pushChoice(new Choice());
  }

  get choices(): Choice[] {
    return this._choices;
  }

  pushChoice(choice:Choice = new Choice()): void {
    this._choices.push(choice);
  }

  popChoice(): Choice {
    if (this._choices.length == 0)
      return null;
    var ret = this._choices[this._choices.length - 1];
    this._choices.splice(-1, 1);
    return ret;
  }

  copy(question: ChoiceQuestion): void {
    super.copy(question)
    question.choices.length = 0;
    for (var i=0; i< this.choices.length; i++) {
      var c = new Choice();
      this.choices[i].copy(c);
      question.pushChoice(c);
    }
  }
}
