import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCheckoutUi } from './commerce-checkout-ui';

describe('CommerceCheckoutUi', () => {
  let component: CommerceCheckoutUi;
  let fixture: ComponentFixture<CommerceCheckoutUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCheckoutUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCheckoutUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
