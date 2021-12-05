import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpHistoryComponent } from './cp-history.component';

describe('CpHistoryComponent', () => {
  let component: CpHistoryComponent;
  let fixture: ComponentFixture<CpHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CpHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
