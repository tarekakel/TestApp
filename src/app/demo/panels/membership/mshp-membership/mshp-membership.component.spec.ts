import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MshpMembershipComponent } from './mshp-membership.component';

describe('MshpMembershipComponent', () => {
  let component: MshpMembershipComponent;
  let fixture: ComponentFixture<MshpMembershipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
