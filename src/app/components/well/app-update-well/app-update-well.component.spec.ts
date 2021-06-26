import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdateWellComponent } from './app-update-well.component';

describe('AppUpdateWellComponent', () => {
  let component: AppUpdateWellComponent;
  let fixture: ComponentFixture<AppUpdateWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpdateWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUpdateWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
