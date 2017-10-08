import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by Yubar on 3/27/2017.
 */

@Pipe({
  name: "time"
})
export class TimePipe implements PipeTransform{

  transform(value: any, ...args: any[]): any {
    return Math.floor(value / 60) + ":" + value % 60;
  }

}
