import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsPaymentUi } from './store-ops-payment-ui';

describe('StoreOpsPaymentUi', () => {
  let component: StoreOpsPaymentUi;
  let fixture: ComponentFixture<StoreOpsPaymentUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsPaymentUi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsPaymentUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
