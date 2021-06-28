import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTestDeleteComponent } from './well-test-delete.component';

describe('WellTestDeleteComponent', () => {
  let component: WellTestDeleteComponent;
  let fixture: ComponentFixture<WellTestDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellTestDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellTestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
