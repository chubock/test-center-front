/**
 * Created by Yubar on 1/5/2017.
 */
export class Choice {
  constructor(public text:string = "") {}

  copy(choice: Choice):void {
    choice.text = this.text;
  }
}
