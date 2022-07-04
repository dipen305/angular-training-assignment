import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss']
})
export class TimerControllerComponent implements OnInit {
  timerLimit:any;
  timerStarted:boolean = false;
  constructor() { }
  @Input() pauseLog:any;
  @Output() startClickEvent: EventEmitter<any> = new EventEmitter();
  @Output() resetClickEvent: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }
  startPauseClick(){
    if(this.timerLimit>0)
      this.timerStarted = true;
    else
      this.timerStarted = ! this.timerStarted;
    this.startClickEvent.emit({timerLimit:this.timerLimit,startTimer:this.timerStarted});
    this.timerLimit = null;
  }
  reset(){
    this.resetClickEvent.emit();
  }
}
