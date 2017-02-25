import {Question} from "./Question";
import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/5/2017.
 */

export abstract class ChoiceQuestion extends Question{
  choices: Choice[] = [];

  constructor(text:string = "", numberOfChoices: number = 3) {
    super(text);
    for (var i=0; i<numberOfChoices; i++)
      this.pushChoice(new Choice(i));
  }

  pushChoice(choice:Choice = new Choice(this.choices.length)): void {
    this.choices.push(choice);
  }

  popChoice(): Choice {
    if (this.choices.length == 0)
      return null;
    var ret = this.choices[this.choices.length - 1];
    this.choices.splice(-1, 1);
    return ret;
  }

  copy(question: ChoiceQuestion): void {
    super.copy(question);
    this.choices.length = 0;
    if (question.choices) {
      for (var i=0; i< question.choices.length; i++) {
        var c = new Choice(i);
        c.copy(question.choices[i]);
        this.pushChoice(c);
      }
    }
  }

  toJSON():any {
    var ret = super.toJSON();
    ret.choices = this.choices;
    return ret;
  }
}
