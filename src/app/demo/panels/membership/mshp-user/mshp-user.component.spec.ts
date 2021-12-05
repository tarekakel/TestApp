import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MshpUserComponent } from './mshp-user.component';

describe('MshpUserComponent', () => {
  let component: MshpUserComponent;
  let fixture: ComponentFixture<MshpUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
