import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceBillingUi } from './finance-billing-ui';

describe('FinanceBillingUi', () => {
  let component: FinanceBillingUi;
  let fixture: ComponentFixture<FinanceBillingUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceBillingUi],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceBillingUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
