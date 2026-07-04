import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCheckoutApi } from './commerce-checkout-api';

describe('CommerceCheckoutApi', () => {
  let component: CommerceCheckoutApi;
  let fixture: ComponentFixture<CommerceCheckoutApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCheckoutApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCheckoutApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
