import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellGeneralInfoComponent } from './well-general-info.component';

describe('WellGeneralInfoComponent', () => {
  let component: WellGeneralInfoComponent;
  let fixture: ComponentFixture<WellGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
