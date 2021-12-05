import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MshpCountryComponent } from './mshp-country.component';

describe('MshpCountryComponent', () => {
  let component: MshpCountryComponent;
  let fixture: ComponentFixture<MshpCountryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
