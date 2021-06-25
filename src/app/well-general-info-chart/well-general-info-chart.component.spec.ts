import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellGeneralInfoChartComponent } from './well-general-info-chart.component';

describe('WellGeneralInfoChartComponent', () => {
  let component: WellGeneralInfoChartComponent;
  let fixture: ComponentFixture<WellGeneralInfoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellGeneralInfoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellGeneralInfoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
