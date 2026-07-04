import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceEWalletUi } from './finance-e-wallet-ui';

describe('FinanceEWalletUi', () => {
  let component: FinanceEWalletUi;
  let fixture: ComponentFixture<FinanceEWalletUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceEWalletUi],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceEWalletUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
