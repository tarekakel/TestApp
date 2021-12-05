import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcommCheckoutComponent } from './ecomm-checkout.component';

describe('EcommCheckoutComponent', () => {
  let component: EcommCheckoutComponent;
  let fixture: ComponentFixture<EcommCheckoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
