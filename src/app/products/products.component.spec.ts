/* tslint:disable:no-unused-variable */
import { HttpClient } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from "./products.component";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers:[HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
