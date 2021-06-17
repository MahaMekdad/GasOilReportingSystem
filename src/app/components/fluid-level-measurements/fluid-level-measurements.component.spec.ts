import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidLevelMeasurementsComponent } from './fluid-level-measurements.component';

describe('FluidLevelMeasurementsComponent', () => {
  let component: FluidLevelMeasurementsComponent;
  let fixture: ComponentFixture<FluidLevelMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidLevelMeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidLevelMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
