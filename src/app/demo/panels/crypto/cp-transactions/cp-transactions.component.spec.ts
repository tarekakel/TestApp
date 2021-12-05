import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpTransactionsComponent } from './cp-transactions.component';

describe('CpTransactionsComponent', () => {
  let component: CpTransactionsComponent;
  let fixture: ComponentFixture<CpTransactionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CpTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
