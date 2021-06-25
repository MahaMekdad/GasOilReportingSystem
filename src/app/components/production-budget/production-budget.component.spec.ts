import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionBudgetComponent } from './production-budget.component';

describe('ProductionBudgetComponent', () => {
  let component: ProductionBudgetComponent;
  let fixture: ComponentFixture<ProductionBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
