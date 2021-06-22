import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionNavComponent } from './concession-nav.component';

describe('ConcessionNavComponent', () => {
  let component: ConcessionNavComponent;
  let fixture: ComponentFixture<ConcessionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
