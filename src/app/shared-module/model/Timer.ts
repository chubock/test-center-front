/**
 * Created by Yubar on 3/27/2017.
 */

export class Timer {

  hidden:boolean = false;

  constructor(public endTime:number, public reverse:boolean = false, public interval:number = 1, public seconds:number = 0){}
}
