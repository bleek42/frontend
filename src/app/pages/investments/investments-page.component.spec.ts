import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsPage } from './investments-page.component';

describe('InvestmentsPage', () => {
  let component: InvestmentsPage;
  let fixture: ComponentFixture<InvestmentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
