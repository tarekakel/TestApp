import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SisEvaluationComponent } from './sis-evaluation.component';

describe('SisEvaluationComponent', () => {
  let component: SisEvaluationComponent;
  let fixture: ComponentFixture<SisEvaluationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SisEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
