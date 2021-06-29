import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPdfComponent } from './lab-pdf.component';

describe('LabPdfComponent', () => {
  let component: LabPdfComponent;
  let fixture: ComponentFixture<LabPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
