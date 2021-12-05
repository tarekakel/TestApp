import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcommProductComponent } from './ecomm-product.component';

describe('EcommProductComponent', () => {
  let component: EcommProductComponent;
  let fixture: ComponentFixture<EcommProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
