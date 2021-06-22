import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePgiComponent } from './update-pgi.component';

describe('UpdatePgiComponent', () => {
  let component: UpdatePgiComponent;
  let fixture: ComponentFixture<UpdatePgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePgiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
