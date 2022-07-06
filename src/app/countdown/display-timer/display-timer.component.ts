import { Component, Input } from "@angular/core";

@Component({
  selector: "app-display-timer",
  templateUrl: "./display-timer.component.html",
  styleUrls: ["./display-timer.component.scss"],
})
export class DisplayTimerComponent {
  @Input() timer: number = 0;
}
