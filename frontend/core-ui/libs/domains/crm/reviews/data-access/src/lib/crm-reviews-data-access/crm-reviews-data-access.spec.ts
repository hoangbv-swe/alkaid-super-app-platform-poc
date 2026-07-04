import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmReviewsDataAccess } from './crm-reviews-data-access';

describe('CrmReviewsDataAccess', () => {
  let component: CrmReviewsDataAccess;
  let fixture: ComponentFixture<CrmReviewsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmReviewsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmReviewsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
