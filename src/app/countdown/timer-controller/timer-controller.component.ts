import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss']
})
export class TimerControllerComponent implements OnInit {
  timerLimit:any;
  isTimerRunning:boolean = false;
  constructor() { }
  @Input() pauseLog:any;
  @Input() errorMessage:string = '';
  @Output() startClickEvent: EventEmitter<any> = new EventEmitter();
  @Output() resetClickEvent: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }
  startPauseClick(){
    if(this.timerLimit>0)
      this.isTimerRunning = true;
    else
      this.isTimerRunning = ! this.isTimerRunning;
    this.startClickEvent.emit({timerLimit:this.timerLimit,isTimerRunning:this.isTimerRunning});
    this.timerLimit = null;
  }
  reset(){
    this.resetClickEvent.emit();
  }
}
