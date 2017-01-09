import {Question} from "./Question";
/**
 * Created by yubar on 1/9/17.
 */

export class SelectInPassageQuestion extends Question {

  answer:number;
  selected: number;

  constructor(text:string = "") {
    super(text);
  }

  get shapedText():string {
    return this.text.replace(/<strong>(.*?)<\/strong>/g, "<naghi>$1</naghi>");
  }

}
