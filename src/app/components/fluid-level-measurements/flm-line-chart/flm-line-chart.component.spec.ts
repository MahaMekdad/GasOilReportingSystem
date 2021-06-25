import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlmLineChartComponent } from './flm-line-chart.component';

describe('FlmLineChartComponent', () => {
  let component: FlmLineChartComponent;
  let fixture: ComponentFixture<FlmLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlmLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlmLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
