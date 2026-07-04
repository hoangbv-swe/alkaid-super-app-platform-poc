import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsPaymentDataAccess } from './store-ops-payment-data-access';

describe('StoreOpsPaymentDataAccess', () => {
  let component: StoreOpsPaymentDataAccess;
  let fixture: ComponentFixture<StoreOpsPaymentDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsPaymentDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsPaymentDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
