import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlmComponent } from './update-flm.component';

describe('UpdateFlmComponent', () => {
  let component: UpdateFlmComponent;
  let fixture: ComponentFixture<UpdateFlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
