import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTestTableComponent } from './well-test-table.component';

describe('WellTestTableComponent', () => {
  let component: WellTestTableComponent;
  let fixture: ComponentFixture<WellTestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellTestTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellTestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
