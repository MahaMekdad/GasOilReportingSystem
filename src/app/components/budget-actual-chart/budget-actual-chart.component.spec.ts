import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetActualChartComponent } from './budget-actual-chart.component';

describe('BudgetActualChartComponent', () => {
  let component: BudgetActualChartComponent;
  let fixture: ComponentFixture<BudgetActualChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetActualChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetActualChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
