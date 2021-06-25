import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetActualChComponent } from './budget-actual-ch.component';

describe('BudgetActualChComponent', () => {
  let component: BudgetActualChComponent;
  let fixture: ComponentFixture<BudgetActualChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetActualChComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetActualChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
