import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetActualComponent } from './budget-actual.component';

describe('BudgetActualComponent', () => {
  let component: BudgetActualComponent;
  let fixture: ComponentFixture<BudgetActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
