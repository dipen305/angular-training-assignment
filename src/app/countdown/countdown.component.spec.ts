/* tslint:disable:no-unused-variable */
import { DatePipe } from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ActivityLogComponent } from "./activity-log/activity-log.component";
import { CountdownComponent } from "./countdown.component";
import { DisplayTimerComponent } from "./display-timer/display-timer.component";
import { TimerControllerComponent } from "./timer-controller/timer-controller.component";
import { TimerEventCountComponent } from "./timer-event-count/timer-event-count.component";

describe("CountdownComponent", () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        CountdownComponent,
        TimerControllerComponent,
        DisplayTimerComponent,
        ActivityLogComponent,
        TimerEventCountComponent
      ],
      providers: [DatePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

    it("should start timer", () => {
      let event = {timerLimit:10,isTimerRunning:true}
      component.startTimer(event);
      expect(component.timerLimit).toEqual(event.timerLimit);
    });

  it("should re-start timer", () => {
    component.timerLimit =10;
      let event = {timerLimit:10,isTimerRunning:true}
      component.startTimer(event);
      expect(component.timerLimit).toEqual(event.timerLimit);
    });

  it("should resume timer", () => {
    component.timerLimit = 10;
    let event = {timerLimit:null,isTimerRunning:true}
    component.startTimer(event);
    expect(component.startCount).toBeGreaterThan(0);
  });

  it("should pause timer", () => {
    component.timerLimit = 10;
    let event;
    event = {timerLimit:null,isTimerRunning:true}
    component.startTimer(event);
    event = {timerLimit:null,isTimerRunning:false}
    component.startTimer(event);
    expect(component.pauseCount).toBeGreaterThan(0);
  });

  it("should set the error message if no value entered and timer is not running", () => {
    component.timerLimit = 0;
    let event = {timerLimit:null,isTimerRunning:false}
    component.startTimer(event);
    expect(component.errorMessage).toEqual('Please enter timer limit');
  });

  it("should stop timer once it reaches to 0", () => {
    component.stopInterval('finish');
    expect(component.startStopLog[component.startStopLog.length-1]).toContain('Finish');
  });

});
