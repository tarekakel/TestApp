import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SisLeaveComponent } from './sis-leave.component';

describe('SisLeaveComponent', () => {
  let component: SisLeaveComponent;
  let fixture: ComponentFixture<SisLeaveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SisLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
