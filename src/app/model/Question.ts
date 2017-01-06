/**
 * Created by Yubar on 1/5/2017.
 */

export class Question {
  
  constructor(private _text:string = "") {}
  
  get text(): string{
    return this._text
  }
  
  set text(text: string) {
    this._text = text
  }
  
}
