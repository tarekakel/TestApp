import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PcTaskComponent } from './pc-task.component';

describe('PcTaskComponent', () => {
  let component: PcTaskComponent;
  let fixture: ComponentFixture<PcTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
