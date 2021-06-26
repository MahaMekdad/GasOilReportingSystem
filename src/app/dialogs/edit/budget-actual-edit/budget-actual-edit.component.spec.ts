import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetActualEditComponent } from './budget-actual-edit.component';

describe('BudgetActualEditComponent', () => {
  let component: BudgetActualEditComponent;
  let fixture: ComponentFixture<BudgetActualEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetActualEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetActualEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
