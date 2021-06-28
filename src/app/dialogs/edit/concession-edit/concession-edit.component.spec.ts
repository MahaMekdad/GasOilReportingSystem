import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionEditComponent } from './concession-edit.component';

describe('ConcessionEditComponent', () => {
  let component: ConcessionEditComponent;
  let fixture: ComponentFixture<ConcessionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
