import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HospDashboardComponent } from './hosp-dashboard.component';

describe('HospDashboardComponent', () => {
  let component: HospDashboardComponent;
  let fixture: ComponentFixture<HospDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HospDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
