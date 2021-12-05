import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospDepartmentComponent } from './hosp-department.component';

describe('HospDepartmentComponent', () => {
  let component: HospDepartmentComponent;
  let fixture: ComponentFixture<HospDepartmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HospDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
