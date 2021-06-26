import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionAddComponent } from './concession-add.component';

describe('ConcessionAddComponent', () => {
  let component: ConcessionAddComponent;
  let fixture: ComponentFixture<ConcessionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
