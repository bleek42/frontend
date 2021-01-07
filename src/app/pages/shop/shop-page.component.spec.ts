import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPage } from './shop-page.component';

describe('ShopPage', () => {
  let component: ShopPage;
  let fixture: ComponentFixture<ShopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
