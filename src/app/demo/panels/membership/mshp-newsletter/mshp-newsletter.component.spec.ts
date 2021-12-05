import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MshpNewsletterComponent } from './mshp-newsletter.component';

describe('MshpNewsletterComponent', () => {
  let component: MshpNewsletterComponent;
  let fixture: ComponentFixture<MshpNewsletterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MshpNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshpNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
