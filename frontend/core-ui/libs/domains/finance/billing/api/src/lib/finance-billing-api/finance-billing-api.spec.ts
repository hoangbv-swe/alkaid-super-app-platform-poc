import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceBillingApi } from './finance-billing-api';

describe('FinanceBillingApi', () => {
  let component: FinanceBillingApi;
  let fixture: ComponentFixture<FinanceBillingApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceBillingApi],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceBillingApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
