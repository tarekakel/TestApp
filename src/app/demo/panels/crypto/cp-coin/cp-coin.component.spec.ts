import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpCoinComponent } from './cp-coin.component';

describe('CpCoinComponent', () => {
  let component: CpCoinComponent;
  let fixture: ComponentFixture<CpCoinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CpCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
