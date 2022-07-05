/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { CountdownWithServiceComponent } from './countdown-with-service.component';
import { TimerEventCountComponent } from './timer-event-count/timer-event-count.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { TimerControllerWithServiceComponent } from './timer-controller/timer-controller-with-service.component';
import { FormsModule } from '@angular/forms';

describe('CountdownWithServiceComponent', () => {
  let component: CountdownWithServiceComponent;
  let fixture: ComponentFixture<CountdownWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [
        CountdownWithServiceComponent,
        DisplayTimerComponent,
        TimerControllerWithServiceComponent,
        ActivityLogComponent,
        TimerEventCountComponent
      ],
      providers: [DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
