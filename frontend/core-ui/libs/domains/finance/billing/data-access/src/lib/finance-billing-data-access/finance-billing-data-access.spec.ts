import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceBillingDataAccess } from './finance-billing-data-access';

describe('FinanceBillingDataAccess', () => {
  let component: FinanceBillingDataAccess;
  let fixture: ComponentFixture<FinanceBillingDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceBillingDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceBillingDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
