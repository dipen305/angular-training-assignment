import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CountdownService } from '../shared/services/countdown.service';

@Component({
  selector: 'app-countdown-with-service',
  templateUrl: './countdown-with-service.component.html',
  styleUrls: ['./countdown-with-service.component.scss']
})
export class CountdownWithServiceComponent {
  constructor(private countDownService:CountdownService, private datePipe:DatePipe) { }
}
