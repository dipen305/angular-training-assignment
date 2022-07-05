/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimerEventCountComponent } from './timer-event-count.component';
import { DatePipe } from '@angular/common';
import { CountdownService } from 'src/app/shared/services/countdown.service';

describe('TimerEventCountComponent', () => {
  let component: TimerEventCountComponent;
  let fixture: ComponentFixture<TimerEventCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerEventCountComponent ],
      providers:[DatePipe,CountdownService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerEventCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
