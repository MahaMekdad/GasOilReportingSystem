import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTestEditComponent } from './well-test-edit.component';

describe('WellTestEditComponent', () => {
  let component: WellTestEditComponent;
  let fixture: ComponentFixture<WellTestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellTestEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellTestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
