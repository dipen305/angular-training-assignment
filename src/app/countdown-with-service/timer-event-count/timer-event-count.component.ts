import { Component } from "@angular/core";
import { CountdownService } from "../../shared/services/countdown.service";
@Component({
  selector: "app-timer-event-count",
  templateUrl: "./timer-event-count.component.html",
  styleUrls: ["./timer-event-count.component.scss"],
})
export class TimerEventCountComponent {
  constructor(public countDownService: CountdownService) {}
}
