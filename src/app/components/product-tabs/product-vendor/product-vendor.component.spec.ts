import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVendorComponent } from './product-vendor.component';

describe('ProductVendorComponent', () => {
  let component: ProductVendorComponent;
  let fixture: ComponentFixture<ProductVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductVendorComponent]
    });
    fixture = TestBed.createComponent(ProductVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
