import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellNavComponent } from './well-nav.component';

describe('WellNavComponent', () => {
  let component: WellNavComponent;
  let fixture: ComponentFixture<WellNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
