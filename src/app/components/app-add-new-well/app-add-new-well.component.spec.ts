import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddNewWellComponent } from './app-add-new-well.component';

describe('AppAddNewWellComponent', () => {
  let component: AppAddNewWellComponent;
  let fixture: ComponentFixture<AppAddNewWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddNewWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddNewWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
