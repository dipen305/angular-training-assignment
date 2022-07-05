/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TimerControllerComponent } from "./timer-controller.component";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";

describe("TimeControllerComponent", () => {
  let component: TimerControllerComponent;
  let fixture: ComponentFixture<TimerControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TimerControllerComponent],
      providers:[DatePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("startPauseClick() should start the timer if value is > 0", () => {
    component.timerLimit = 100;
    component.startPauseClick();
    expect(component.timerStarted).toBeTruthy();
  });

  it("startPauseClick() should pause the timer if value is blank ", () => {
    component.timerLimit = "";
    component.startPauseClick();
    expect(component.timerLimit).toEqual(null);
  });

  it("reset() should reset the timer ", () => {
    spyOn(component.resetClickEvent, "emit");
    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector("#btnReset");
    button.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    expect(component.resetClickEvent.emit).toHaveBeenCalled();
  });
});
