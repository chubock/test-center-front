import {Question} from "./Question";
import {Choice} from "./Choice";
/**
 * Created by Yubar on 1/5/2017.
 */

export class ChoiceQuestion extends Question{
  private _answers: number[] = [];
  private _choices: Choice[] = [];
  private _selects: number[] = [];

  constructor(text:string = "") {
    super(text);
  }

  get answer(): number {
    return this._answers[0];
  }

  set answer(answer: number) {
    this._answers = [];
    this._answers.push(answer)
  }

  get answers(): number[] {
    return this._answers;
  }

  set answers(answers: number[]) {
    this._answers = answers;
  }

  get selected(): number {
    return this._selects[0];
  }

  set selected(selected: number) {
    this._selects = [];
    this._selects.push(selected)
  }

  get selects(): number[] {
    return this._selects;
  }

  set selects(selects: number[]) {
    this._selects = selects;
  }

  get choices(): Choice[] {
    return this._choices;
  }

  pushChoice(choice:Choice = new Choice()): void {
    this._choices.push(choice);
  }

  popChoice(): Choice {
    if (this._choices.length == 0)
      return null;
    var ret = this._choices[this._choices.length - 1];
    this._choices.splice(-1, 1);
    return ret;
  }
}
