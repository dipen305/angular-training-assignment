/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerControllerWithServiceComponent } from './timer-controller-with-service.component';
import { CountdownService } from '../../shared/services/countdown.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('TimeControllerWithServiceComponent', () => {
  let component: TimerControllerWithServiceComponent;
  let fixture: ComponentFixture<TimerControllerWithServiceComponent>;
  let countDownService:jasmine.SpyObj<CountdownService>;

  beforeEach(waitForAsync(() => {
    countDownService = jasmine.createSpyObj('CountdownService', ['reset','timerHandler'])
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ TimerControllerWithServiceComponent ],
      providers: [DatePipe,{ provide: CountdownService, useValue: countDownService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerControllerWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("startPauseClick() should start the timer ", () => {
    component.timerLimit = 100;
    component.startPauseClick();
   expect(countDownService.timerStarted).toBeTruthy();
  });

  it("startPauseClick() should pause the timer ", () => {
    component.timerLimit = '';
    countDownService.timerStarted = true;
    component.startPauseClick();
   expect(countDownService.timerStarted).toBeFalsy();
  });

  it("reset() should reset the timer ", () => {
    component.reset();
   expect(countDownService.reset).toHaveBeenCalled();
  });
});
