import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancePayoutsUi } from './finance-payouts-ui';

describe('FinancePayoutsUi', () => {
  let component: FinancePayoutsUi;
  let fixture: ComponentFixture<FinancePayoutsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancePayoutsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancePayoutsUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
