import {Question} from "./Question";
/**
 * Created by yubar on 1/8/17.
 */

export class WritingQuestion extends Question {

  constructor(text: string = "", public answer:string = "") {
    super(text);
  }

}
