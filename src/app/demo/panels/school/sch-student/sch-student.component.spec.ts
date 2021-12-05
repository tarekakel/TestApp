import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchStudentComponent } from './sch-student.component';

describe('SchStudentComponent', () => {
  let component: SchStudentComponent;
  let fixture: ComponentFixture<SchStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
