/**
 * Created by Yubar on 1/27/2017.
 */

export interface ReadingComprehensionQuestionItem {
  type(): string;

  getNumber(): number;
  setNumber(number:number):void ;
}
