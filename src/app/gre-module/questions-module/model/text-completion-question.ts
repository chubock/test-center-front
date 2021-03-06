import {TextCompletionQuestionItem} from "./text-completion-question-item";
import {Question} from "./question";
import {Choice} from "./choice";
/**
 * Created by Yubar on 1/11/2017.
 */

export class TextCompletionQuestion extends Question {

  items:TextCompletionQuestionItem[] = [];
  questionTypes:string[] =["GRE_TEXT_COMPLETION_ONE_BLANK", "GRE_TEXT_COMPLETION_TWO_BLANK", "GRE_TEXT_COMPLETION_THREE_BLANK"];

  constructor(text:string = "") {
    super(text);
    this.pushItem(new TextCompletionQuestionItem(5));
  }

  getState():string {
    let selects:number = 0;
    this.items.forEach(item => {
      if (item.selected != null)
        selects++;
    });
    if (selects == 0)
      return "Not Answered";
    else if (selects == this.items.length)
      return "Answered";
    else
      return "Incomplete";
  }

  get matrix():Choice[][] {
    let ret = [];
    if (this.items.length == 1) {
      for (let i=0; i< this.items[0].choices.length; i++) {
        ret.push([]);
        ret[i].push(this.items[0].choices[i]);
      }
    } else {
      for (let i=0; i<3; i++) {
        ret.push([]);
        for (let j=0; j< this.items.length; j++)
          ret[i].push(this.items[j].choices[i]);
      }
    }
    return ret;
  }

  pushItem(item:TextCompletionQuestionItem = new TextCompletionQuestionItem(3)): void {
    if (this.items.length > 2)
      throw new Error("Invalid Operation");
    if (this.items.length == 1) {
      this.items[0].popChoice();
      this.items[0].popChoice();
    }
    this.items.push(item);
  }

  popItem(): TextCompletionQuestionItem {
    if (this.items.length < 2)
      throw new Error("Invalid Operation");
    let ret = this.items[this.items.length - 1];
    this.items.splice(-1, 1);
    if (this.items.length == 1) {
      this.items[0].pushChoice(new Choice(3, 'Choice ' + 4));
      this.items[0].pushChoice(new Choice(4, 'Choice ' + 5));
    }
    return ret;
  }

  copy(textCompletionQuestion: TextCompletionQuestion): void {
    super.copy(textCompletionQuestion);
    this.items = [];
    textCompletionQuestion.items.forEach(item => {
      let i = new TextCompletionQuestionItem(item.choices.length);
      i.copy(item);
      this.items.push(i);
    });
  }

  toJSON(): any{
    let question = super.toJSON();
    question.items = this.items;
    return question;
  }

  prepare():void {
    this.items.forEach((item) => {
      item.prepare();
    });
  }

}
