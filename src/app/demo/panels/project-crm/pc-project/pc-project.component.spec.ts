import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PcProjectComponent } from './pc-project.component';

describe('PcProjectComponent', () => {
  let component: PcProjectComponent;
  let fixture: ComponentFixture<PcProjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
