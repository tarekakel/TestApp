import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadStreamingComponent } from './download-streaming.component';

describe('DownloadStreamingComponent', () => {
  let component: DownloadStreamingComponent;
  let fixture: ComponentFixture<DownloadStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
