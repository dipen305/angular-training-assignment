import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { DynamicBoxComponent } from "./dynamic-box.component";

describe("DynamicBoxComponent", () => {
  let component: DynamicBoxComponent;
  let fixture: ComponentFixture<DynamicBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicBoxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("boxButtonClick() => should show alert", () => {
    spyOn(window, "alert");
    component.boxButtonClick(10);
    expect(window.alert).toHaveBeenCalledWith("Button 10 is clicked");
  });


  it("windowScroll() => should add value dynamically on scroll", () => {
  let mockEvent = {
    target:{
      documentElement:{
        scrollHeight:100
      }
    }
  }
  component.windowScroll(mockEvent);
  expect(component.boxArray.length).toBeGreaterThan(30);
  });
});
