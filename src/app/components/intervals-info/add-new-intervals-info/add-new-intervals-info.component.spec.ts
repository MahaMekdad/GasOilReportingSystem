import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIntervalsInfoComponent } from './add-new-intervals-info.component';

describe('AddNewIntervalsInfoComponent', () => {
  let component: AddNewIntervalsInfoComponent;
  let fixture: ComponentFixture<AddNewIntervalsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewIntervalsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewIntervalsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
