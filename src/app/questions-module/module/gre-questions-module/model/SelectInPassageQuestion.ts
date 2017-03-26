import {Question} from "../../../../questions-module/model/Question";
import {InnerQuestion} from "./InnerQuestion";
import {ReadingComprehensionQuestion} from "./ReadingComprehensionQuestion";
/**
 * Created by yubar on 1/9/17.
 */

export class SelectInPassageQuestion extends Question implements InnerQuestion<ReadingComprehensionQuestion>{

  number:number;
  answer:number;
  selected: number;
  private parent:ReadingComprehensionQuestion;

  constructor(text:string = "") {
    super(text);
  }

  type(): string {
    return "select-in-passage";
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number: number): void {
    this.number = number;
  }

  getParent(): ReadingComprehensionQuestion {
    return this.parent;
  }

  setParent(parent: ReadingComprehensionQuestion): void {
    this.parent = parent;
  }

  copy(question: SelectInPassageQuestion): void {
    super.copy(question);
    this.answer = question.answer;
    this.selected = question.selected;
    this.number = question.number;
    this.parent = new ReadingComprehensionQuestion();
    if (question.parent)
      this.parent.copy(question.parent);
  }

  toJSON():any {
    let ret = super.toJSON();
    ret.answer = this.answer;
    ret.selected = this.selected;
    ret.number = this.number;
    return ret;
  }

}

export class PassageTextFraction {
  constructor(public text:string, public number:number){};
}

export class PassageParagraph {
  textFractions:PassageTextFraction[] = [];

  constructor(text:string, index:number) {
    var matchResult = text.match(/<u>(.*?)<\/u>/g);
    if (matchResult == null || matchResult.length == 0) {
      this.textFractions.push(new PassageTextFraction(text, -1));
    } else {
      var indexOf = text.indexOf(matchResult[0]);
      if (indexOf != 0)
        this.textFractions.push(new PassageTextFraction(text.substring(0, indexOf), -1));
      var lastIndex = indexOf + matchResult[0].length;
      this.textFractions.push(new PassageTextFraction(text.substring(indexOf + 3, lastIndex - 4), index));
      for (var i=1; i< matchResult.length; i++) {
        indexOf = text.indexOf(matchResult[i]);
        this.textFractions.push(new PassageTextFraction(text.substring(lastIndex, indexOf), -1));
        lastIndex = indexOf + matchResult[i].length;
        this.textFractions.push(new PassageTextFraction(text.substring(indexOf + 3, lastIndex - 4), index + i));
      }
      if (lastIndex != text.length)
        this.textFractions.push(new PassageTextFraction(text.substring(lastIndex), -1));
    }
  };

  get choicesCount():number {
    var ret = 0;
    this.textFractions.forEach(function (item) {
      if (item.number != -1)
        ret ++;
    });
    return ret;
  }
}
