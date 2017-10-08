import {Question} from "./question";
import {Choice} from "./choice";
/**
 * Created by Yubar on 1/5/2017.
 */

export abstract class ChoiceQuestion extends Question{
  choices: Choice[] = [];

  constructor(text:string = "", numberOfChoices: number = 3) {
    super(text);
    for (let i=0; i<numberOfChoices; i++)
      this.pushChoice(new Choice(i));
  }

  pushChoice(choice:Choice = new Choice(this.choices.length)): void {
    this.choices.push(choice);
  }

  popChoice(): Choice {
    if (this.choices.length == 0)
      return null;
    let ret = this.choices[this.choices.length - 1];
    this.choices.splice(-1, 1);
    return ret;
  }

  copy(question: ChoiceQuestion): void {
    super.copy(question);
    this.choices.length = 0;
    if (question.choices) {
      for (let i=0; i< question.choices.length; i++) {
        let c = new Choice(i);
        c.copy(question.choices[i]);
        this.pushChoice(c);
      }
    }
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.choices = this.choices;
    return ret;
  }
}
