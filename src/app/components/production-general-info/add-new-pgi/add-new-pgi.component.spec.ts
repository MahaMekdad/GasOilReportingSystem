import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPgiComponent } from './add-new-pgi.component';

describe('AddNewPgiComponent', () => {
  let component: AddNewPgiComponent;
  let fixture: ComponentFixture<AddNewPgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPgiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
