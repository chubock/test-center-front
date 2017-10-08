import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from "@angular/core";
import {SimpleTimer} from "ng2-simple-timer";
import {Timer} from "../../model/timer";
/**
 * Created by Yubar on 3/26/2017.
 */

@Component({
  selector: 'timer-component',
  template: '{{timer.hidden ? "" : timer.seconds | time}}',
  providers: [SimpleTimer]
})
export class TimerComponent implements OnInit, OnChanges{

  @Input() timer:Timer;
  @Output() timeEnded:EventEmitter<void> = new EventEmitter<void>();

  constructor(private st:SimpleTimer){}

  ngOnInit():void {
    this.startTimer();
  }

  ngOnChanges():void {
    this.startTimer();
  }

  private startTimer(): void {
    if (this.timer.reverse && this.timer.endTime)
      this.timer.seconds = this.timer.endTime;
    this.st.delTimer("mainTimer");
    this.st.newTimer("mainTimer", this.timer.interval);
    this.st.subscribe("mainTimer", e => {
      if (this.isEnded()) {
        this.st.delTimer("mainTimer");
        this.timeEnded.emit();
      } else {
        if (this.timer.endTime && this.timer.reverse)
          this.timer.seconds--;
        else
          this.timer.seconds++;
      }
    })
  }

  private isEnded():boolean {
    return (this.timer.reverse && this.timer.endTime ? this.timer.seconds == 0 : this.timer.endTime == this.timer.seconds);
  }
}
