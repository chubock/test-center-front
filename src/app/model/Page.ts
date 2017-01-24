/**
 * Created by Yubar on 1/20/2017.
 */

export class Page<T> {
  content:T[];
  totalElements:number;
  totalPages:number;
  last:boolean;
  sort:string;
  numberOfElements:number;
  first:boolean;

  constructor(public size:number = 5){};
}
