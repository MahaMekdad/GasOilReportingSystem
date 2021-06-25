import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWellGeneralInfoComponent } from './update-well-general-info.component';

describe('UpdateWellGeneralInfoComponent', () => {
  let component: UpdateWellGeneralInfoComponent;
  let fixture: ComponentFixture<UpdateWellGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWellGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWellGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
