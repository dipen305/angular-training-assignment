import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-time-controller",
  templateUrl: "./timer-controller.component.html",
  styleUrls: ["./timer-controller.component.scss"],
})
export class TimerControllerComponent {
  timerLimit: any;
  isTimerRunning: boolean = false;
  @Input() pauseLog: any;
  @Input() errorMessage: string = "";
  @Output() startClickEvent: EventEmitter<any> = new EventEmitter();
  @Output() resetClickEvent: EventEmitter<any> = new EventEmitter();

  startPauseClick() {
    if (this.timerLimit > 0) this.isTimerRunning = true;
    else this.isTimerRunning = !this.isTimerRunning;
    this.startClickEvent.emit({
      timerLimit: this.timerLimit,
      isTimerRunning: this.isTimerRunning,
    });
    this.timerLimit = null;
  }
  reset() {
    this.resetClickEvent.emit();
  }
}
