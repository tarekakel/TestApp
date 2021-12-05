import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpIcoComponent } from './cp-ico.component';

describe('CpIcoComponent', () => {
  let component: CpIcoComponent;
  let fixture: ComponentFixture<CpIcoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CpIcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
