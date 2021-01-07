import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsPage } from './donations-page.component';

describe('DonationsPage', () => {
  let component: DonationsPage;
  let fixture: ComponentFixture<DonationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
