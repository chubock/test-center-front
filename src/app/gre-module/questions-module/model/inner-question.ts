/**
 * Created by Yubar on 3/21/2017.
 */

export interface InnerQuestion<T> {

  type(): string;

  getNumber(): number;
  setNumber(number:number):void ;

  getParent():T;
  setParent(parent:T):void;
}
