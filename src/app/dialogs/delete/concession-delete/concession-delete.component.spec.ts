import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionDeleteComponent } from './concession-delete.component';

describe('ConcessionDeleteComponent', () => {
  let component: ConcessionDeleteComponent;
  let fixture: ComponentFixture<ConcessionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
