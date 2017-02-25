/**
 * Created by Yubar on 1/5/2017.
 */
export class Choice {

  selected:boolean = false;
  answer:boolean = false;

  constructor(public number:number, public text:string = "") {}

  copy(choice: Choice):void {
    this.number = choice.number;
    this.text = choice.text;
    this.answer = choice.answer;
    this.selected = choice.selected;
  }

  toJSON(): any {
    return {text: this.text, answer: this.answer, selected: this.selected}
  }
}
