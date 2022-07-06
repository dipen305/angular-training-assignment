import { Component } from '@angular/core';
import { CountdownService } from '../../shared/services/countdown.service';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss']
})
export class DisplayTimerComponent {
  currentTimer:number = 0;
  constructor(public countDownService:CountdownService) { }
}
