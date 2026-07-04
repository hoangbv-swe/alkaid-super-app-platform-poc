import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmReviewsApi } from './crm-reviews-api';

describe('CrmReviewsApi', () => {
  let component: CrmReviewsApi;
  let fixture: ComponentFixture<CrmReviewsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmReviewsApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmReviewsApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
