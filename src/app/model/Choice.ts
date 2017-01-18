/**
 * Created by Yubar on 1/5/2017.
 */
export class Choice {

  selected:boolean = false;
  answer:boolean = false;

  constructor(public number:number, public text:string = "") {}

  copy(choice: Choice):void {
    choice.number = this.number;
    choice.text = this.text;
    choice.answer = this.answer;
    choice.selected = this.selected;
  }
}
