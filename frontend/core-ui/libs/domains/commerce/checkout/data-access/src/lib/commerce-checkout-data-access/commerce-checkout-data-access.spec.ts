import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCheckoutDataAccess } from './commerce-checkout-data-access';

describe('CommerceCheckoutDataAccess', () => {
  let component: CommerceCheckoutDataAccess;
  let fixture: ComponentFixture<CommerceCheckoutDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCheckoutDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCheckoutDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
