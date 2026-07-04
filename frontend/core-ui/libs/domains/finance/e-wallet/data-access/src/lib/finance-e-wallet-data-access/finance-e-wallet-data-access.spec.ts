import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceEWalletDataAccess } from './finance-e-wallet-data-access';

describe('FinanceEWalletDataAccess', () => {
  let component: FinanceEWalletDataAccess;
  let fixture: ComponentFixture<FinanceEWalletDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceEWalletDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceEWalletDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
