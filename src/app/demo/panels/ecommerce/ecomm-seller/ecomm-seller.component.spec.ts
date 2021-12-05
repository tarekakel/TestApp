import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcommSellerComponent } from './ecomm-seller.component';

describe('EcommSellerComponent', () => {
  let component: EcommSellerComponent;
  let fixture: ComponentFixture<EcommSellerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
