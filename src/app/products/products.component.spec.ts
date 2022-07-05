/* tslint:disable:no-unused-variable */
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { mockProductsData } from "../testing/mockData";
import { ProductsComponent } from "./products.component";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ProductsComponent],
      providers: [HttpClient],
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

  it("priceFilter() => should filter data", () => {
    let mockEvent = {
      target: {
        value: 5000,
      },
    };
    let dataAfterFilter;
    component.productList = mockProductsData;
    component.productDefault = [...component.productList];
    dataAfterFilter = component.productList.filter(
      (element) => element.Price > mockEvent.target.value
    );
    component.priceFilter(mockEvent);
    expect(component.productList.length).toEqual(dataAfterFilter.length);
  });
});
