import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdateFieldComponent } from './app-update-field.component';

describe('AppUpdateFieldComponent', () => {
  let component: AppUpdateFieldComponent;
  let fixture: ComponentFixture<AppUpdateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpdateFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUpdateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
