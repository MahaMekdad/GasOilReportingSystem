import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIntervalsInfoComponent } from './update-intervals-info.component';

describe('UpdateIntervalsInfoComponent', () => {
  let component: UpdateIntervalsInfoComponent;
  let fixture: ComponentFixture<UpdateIntervalsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIntervalsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIntervalsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
