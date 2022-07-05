/* tslint:disable:no-unused-variable */
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { COMPILER_OPTIONS } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { mockStudentsData } from "../testing/mockData";
import { StudentSheetComponent } from "./student-sheet.component";

describe("StudentSheetComponent", () => {
  let component: StudentSheetComponent;
  let fixture: ComponentFixture<StudentSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [StudentSheetComponent],
      providers: [HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("sort() => should sort the data", () => {
    component.studentData = mockStudentsData;
    component.columnHeader = Object.keys(mockStudentsData[0]);
    component.setDataOrder();
    component.sort("english");
    expect(component).toBeTruthy();
  });

  it("sort() => should return sorted data", () => {
    let order;
    component.studentData = mockStudentsData;
    component.studentDataOriginal = [...component.studentData];
    component.columnHeader = Object.keys(mockStudentsData[0]);
    component.setDataOrder();
    component.sort("english");
    order = component.headingObject.find((obj: any) => {
      return obj.key == "english";
    }).order;
    expect(order).toEqual("asc");
    component.sort("english");
    order = component.headingObject.find((obj: any) => {
      return obj.key == "english";
    }).order;
    expect(order).toEqual("desc");
    component.sort("english");
    order = component.headingObject.find((obj: any) => {
      return obj.key == "english";
    }).order;
    expect(order).toEqual("default");
  });

  it("sortData() => should sort the data", () => {
    let order;
    component.studentData = mockStudentsData;
    
    
    // expect(order).toEqual("default");
  });
});
