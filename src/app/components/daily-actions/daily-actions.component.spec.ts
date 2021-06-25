import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyActionsComponent } from './daily-actions.component';

describe('DailyActionsComponent', () => {
  let component: DailyActionsComponent;
  let fixture: ComponentFixture<DailyActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
