import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospDoctorComponent } from './hosp-doctor.component';

describe('HospDoctorComponent', () => {
  let component: HospDoctorComponent;
  let fixture: ComponentFixture<HospDoctorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HospDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
