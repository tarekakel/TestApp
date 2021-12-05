import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpTradingComponent } from './cp-trading.component';

describe('CpTradingComponent', () => {
  let component: CpTradingComponent;
  let fixture: ComponentFixture<CpTradingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CpTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
