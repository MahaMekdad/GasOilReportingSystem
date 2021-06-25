import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMeasurementComponent } from './lab-measurement.component';

describe('LabMeasurementComponent', () => {
  let component: LabMeasurementComponent;
  let fixture: ComponentFixture<LabMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabMeasurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
