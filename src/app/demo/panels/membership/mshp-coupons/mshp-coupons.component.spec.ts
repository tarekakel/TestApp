import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MshpCouponsComponent } from './mshp-coupons.component';

describe('MshpCouponsComponent', () => {
  let component: MshpCouponsComponent;
  let fixture: ComponentFixture<MshpCouponsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
