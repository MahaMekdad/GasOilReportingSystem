import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartS1DateComponent } from './chart-s1-date.component';

describe('ChartS1DateComponent', () => {
  let component: ChartS1DateComponent;
  let fixture: ComponentFixture<ChartS1DateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartS1DateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartS1DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
