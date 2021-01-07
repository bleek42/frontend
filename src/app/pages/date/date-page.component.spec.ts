import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePage } from './date-page.component';

describe('DatePage', () => {
  let component: DatePage;
  let fixture: ComponentFixture<DatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
