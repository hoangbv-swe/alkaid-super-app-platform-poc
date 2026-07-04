import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancePayoutsApi } from './finance-payouts-api';

describe('FinancePayoutsApi', () => {
  let component: FinancePayoutsApi;
  let fixture: ComponentFixture<FinancePayoutsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancePayoutsApi],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancePayoutsApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
