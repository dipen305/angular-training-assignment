import { DatePipe } from '@angular/common';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CountdownService } from './countdown.service';

@Component({
  selector: 'app-countdown-with-service',
  templateUrl: './countdown-with-service.component.html',
  styleUrls: ['./countdown-with-service.component.scss']
})
export class CountdownWithServiceComponent implements OnInit {
  constructor(private countDownService:CountdownService, private datePipe:DatePipe) { }

  ngOnInit() {
  }
}
