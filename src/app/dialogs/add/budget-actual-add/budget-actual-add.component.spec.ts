import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetActualAddComponent } from './budget-actual-add.component';

describe('BudgetActualAddComponent', () => {
  let component: BudgetActualAddComponent;
  let fixture: ComponentFixture<BudgetActualAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetActualAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetActualAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
