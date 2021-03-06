import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPage } from './feedback-page.component';

describe('FeedbackPage', () => {
  let component: FeedbackPage;
  let fixture: ComponentFixture<FeedbackPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
