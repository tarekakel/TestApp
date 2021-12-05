import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchTeacherComponent } from './sch-teacher.component';

describe('SchTeacherComponent', () => {
  let component: SchTeacherComponent;
  let fixture: ComponentFixture<SchTeacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
