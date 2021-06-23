import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellTabsComponent } from './well-tabs.component';

describe('WellTabsComponent', () => {
  let component: WellTabsComponent;
  let fixture: ComponentFixture<WellTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
