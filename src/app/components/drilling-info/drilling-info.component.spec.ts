import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillingInfoComponent } from './drilling-info.component';

describe('DrillingInfoComponent', () => {
  let component: DrillingInfoComponent;
  let fixture: ComponentFixture<DrillingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
