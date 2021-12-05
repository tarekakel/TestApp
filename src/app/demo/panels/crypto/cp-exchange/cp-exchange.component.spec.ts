import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpExchangeComponent } from './cp-exchange.component';

describe('CpExchangeComponent', () => {
  let component: CpExchangeComponent;
  let fixture: ComponentFixture<CpExchangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CpExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
