import { Component, Input } from "@angular/core";

@Component({
  selector: "app-timer-event-count",
  templateUrl: "./timer-event-count.component.html",
  styleUrls: ["./timer-event-count.component.scss"],
})
export class TimerEventCountComponent {
  @Input() startCount: any;
  @Input() pauseCount: any;
}
