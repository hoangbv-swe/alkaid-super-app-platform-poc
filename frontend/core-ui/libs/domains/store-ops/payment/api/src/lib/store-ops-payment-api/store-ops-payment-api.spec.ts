import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsPaymentApi } from './store-ops-payment-api';

describe('StoreOpsPaymentApi', () => {
  let component: StoreOpsPaymentApi;
  let fixture: ComponentFixture<StoreOpsPaymentApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsPaymentApi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsPaymentApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
