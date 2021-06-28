import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductionBudgetComponent } from './update-production-budget.component';

describe('UpdateProductionBudgetComponent', () => {
  let component: UpdateProductionBudgetComponent;
  let fixture: ComponentFixture<UpdateProductionBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductionBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductionBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
