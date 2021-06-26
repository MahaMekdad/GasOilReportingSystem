import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetActualDeleteComponent } from './budget-actual-delete.component';

describe('BudgetActualDeleteComponent', () => {
  let component: BudgetActualDeleteComponent;
  let fixture: ComponentFixture<BudgetActualDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetActualDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetActualDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
