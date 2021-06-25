import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLabComponent } from './add-new-lab.component';

describe('AddNewLabComponent', () => {
  let component: AddNewLabComponent;
  let fixture: ComponentFixture<AddNewLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
