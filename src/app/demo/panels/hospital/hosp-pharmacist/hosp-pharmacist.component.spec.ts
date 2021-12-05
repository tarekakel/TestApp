import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospPharmacistComponent } from './hosp-pharmacist.component';

describe('HospPharmacistComponent', () => {
  let component: HospPharmacistComponent;
  let fixture: ComponentFixture<HospPharmacistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HospPharmacistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
