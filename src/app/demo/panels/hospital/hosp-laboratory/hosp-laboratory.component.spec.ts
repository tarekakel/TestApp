import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospLaboratoryComponent } from './hosp-laboratory.component';

describe('HospLaboratoryComponent', () => {
  let component: HospLaboratoryComponent;
  let fixture: ComponentFixture<HospLaboratoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HospLaboratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
