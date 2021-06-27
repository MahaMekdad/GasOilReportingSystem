import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDrillingInfoComponent } from './update-drilling-info.component';

describe('UpdateDrillingInfoComponent', () => {
  let component: UpdateDrillingInfoComponent;
  let fixture: ComponentFixture<UpdateDrillingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDrillingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDrillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
