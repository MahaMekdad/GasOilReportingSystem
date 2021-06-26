import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDrillinginfoComponent } from './add-new-drillinginfo.component';

describe('AddNewDrillinginfoComponent', () => {
  let component: AddNewDrillinginfoComponent;
  let fixture: ComponentFixture<AddNewDrillinginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDrillinginfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDrillinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
