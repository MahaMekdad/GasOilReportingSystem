import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionGeneralInfoComponent } from './production-general-info.component';

describe('ProductionGeneralInfoComponent', () => {
  let component: ProductionGeneralInfoComponent;
  let fixture: ComponentFixture<ProductionGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
