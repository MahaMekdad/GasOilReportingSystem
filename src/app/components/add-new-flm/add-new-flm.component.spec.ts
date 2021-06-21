import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFlmComponent } from './add-new-flm.component';

describe('AddNewFlmComponent', () => {
  let component: AddNewFlmComponent;
  let fixture: ComponentFixture<AddNewFlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewFlmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
