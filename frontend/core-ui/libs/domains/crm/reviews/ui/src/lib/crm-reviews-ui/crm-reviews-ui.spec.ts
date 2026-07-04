import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmReviewsUi } from './crm-reviews-ui';

describe('CrmReviewsUi', () => {
  let component: CrmReviewsUi;
  let fixture: ComponentFixture<CrmReviewsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmReviewsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmReviewsUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
