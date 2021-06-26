import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTestAddComponent } from './well-test-add.component';

describe('WellTestAddComponent', () => {
  let component: WellTestAddComponent;
  let fixture: ComponentFixture<WellTestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellTestAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellTestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
