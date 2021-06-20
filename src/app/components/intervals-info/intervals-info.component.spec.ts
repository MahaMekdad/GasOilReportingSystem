import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalsInfoComponent } from './intervals-info.component';

describe('IntervalsInfoComponent', () => {
  let component: IntervalsInfoComponent;
  let fixture: ComponentFixture<IntervalsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
