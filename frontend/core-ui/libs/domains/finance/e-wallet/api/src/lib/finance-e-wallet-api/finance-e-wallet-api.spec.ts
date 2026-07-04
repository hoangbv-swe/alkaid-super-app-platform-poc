import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceEWalletApi } from './finance-e-wallet-api';

describe('FinanceEWalletApi', () => {
  let component: FinanceEWalletApi;
  let fixture: ComponentFixture<FinanceEWalletApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceEWalletApi],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceEWalletApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
