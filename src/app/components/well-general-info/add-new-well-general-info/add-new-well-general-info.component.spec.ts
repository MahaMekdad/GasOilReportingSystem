import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWellGeneralInfoComponent } from './add-new-well-general-info.component';

describe('AddNewWellGeneralInfoComponent', () => {
  let component: AddNewWellGeneralInfoComponent;
  let fixture: ComponentFixture<AddNewWellGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewWellGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewWellGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
