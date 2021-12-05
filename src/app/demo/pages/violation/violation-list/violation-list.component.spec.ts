import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationListComponent } from './violation-list.component';

describe('ViolationListComponent', () => {
  let component: ViolationListComponent;
  let fixture: ComponentFixture<ViolationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
