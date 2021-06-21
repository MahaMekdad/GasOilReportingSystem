import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldNavComponent } from './field-nav.component';

describe('FieldNavComponent', () => {
  let component: FieldNavComponent;
  let fixture: ComponentFixture<FieldNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
