import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/22/2017.
 */

export class TextCompletionQuestionItem {

  choices: Choice[] = [];
  answer:number;
  selected:number;

  constructor(numberOfChoices:number) {
    for (var i=0; i<numberOfChoices; i++)
      this.pushChoice(new Choice(i, i + ''));
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

  prepare():void {
    this.choices.forEach((choice, index) => {
      if (choice.answer)
        this.answer = index;
      if (choice.selected)
        this.selected = index;
    });
  }

  copy(item:TextCompletionQuestionItem): void {
    this.choices.length = 0;
    if (item.choices) {
      for (let i=0; i< item.choices.length; i++) {
        let c = new Choice(i);
        c.copy(item.choices[i]);
        this.pushChoice(c);
      }
    }
    this.answer = item.answer;
    this.selected = item.selected;
  }

  toJSON(): any {
    this.choices.forEach(choice => {
      choice.answer = false;
      choice.selected = false;
    });
    if (this.answer)
      this.choices[this.answer].answer = true;
    if (this.selected)
      this.choices[this.selected].selected = true;
    return {choices: this.choices};
  }

}
