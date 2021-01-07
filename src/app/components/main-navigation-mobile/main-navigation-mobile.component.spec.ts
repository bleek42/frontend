import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationMobile } from './main-navigation-mobile.component';

describe('MainNavigationMobile', () => {
  let component: MainNavigationMobile;
  let fixture: ComponentFixture<MainNavigationMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationMobile ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
