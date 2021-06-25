import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductionbudgetComponent } from './new-productionbudget.component';

describe('NewProductionbudgetComponent', () => {
  let component: NewProductionbudgetComponent;
  let fixture: ComponentFixture<NewProductionbudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductionbudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductionbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
