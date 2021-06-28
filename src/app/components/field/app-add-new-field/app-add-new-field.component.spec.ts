import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddNewFieldComponent } from './app-add-new-field.component';

describe('AppAddNewFieldComponent', () => {
  let component: AppAddNewFieldComponent;
  let fixture: ComponentFixture<AppAddNewFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddNewFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddNewFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
