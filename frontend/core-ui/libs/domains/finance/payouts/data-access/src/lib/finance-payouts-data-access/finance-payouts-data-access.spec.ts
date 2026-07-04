import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancePayoutsDataAccess } from './finance-payouts-data-access';

describe('FinancePayoutsDataAccess', () => {
  let component: FinancePayoutsDataAccess;
  let fixture: ComponentFixture<FinancePayoutsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancePayoutsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancePayoutsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
