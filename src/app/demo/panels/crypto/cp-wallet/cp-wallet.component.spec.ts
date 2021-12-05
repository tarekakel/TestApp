import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpWalletComponent } from './cp-wallet.component';

describe('CpWalletComponent', () => {
  let component: CpWalletComponent;
  let fixture: ComponentFixture<CpWalletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CpWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
