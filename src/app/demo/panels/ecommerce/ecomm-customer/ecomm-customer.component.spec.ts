import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcommCustomerComponent } from './ecomm-customer.component';

describe('EcommCustomerComponent', () => {
  let component: EcommCustomerComponent;
  let fixture: ComponentFixture<EcommCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
