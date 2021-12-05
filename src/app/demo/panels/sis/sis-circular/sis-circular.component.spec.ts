import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SisCircularComponent } from './sis-circular.component';

describe('SisCircularComponent', () => {
  let component: SisCircularComponent;
  let fixture: ComponentFixture<SisCircularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SisCircularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
