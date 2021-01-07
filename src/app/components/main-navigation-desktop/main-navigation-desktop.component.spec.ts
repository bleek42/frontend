import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationDesktop } from './main-navigation-desktop.component';

describe('MainNavigationDesktop', () => {
  let component: MainNavigationDesktop;
  let fixture: ComponentFixture<MainNavigationDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationDesktop ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
