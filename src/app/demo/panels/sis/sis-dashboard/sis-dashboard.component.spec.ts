import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SisDashboardComponent } from './sis-dashboard.component';

describe('SisDashboardComponent', () => {
  let component: SisDashboardComponent;
  let fixture: ComponentFixture<SisDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SisDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
