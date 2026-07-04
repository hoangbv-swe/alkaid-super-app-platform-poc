import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCartUi } from './commerce-cart-ui';

describe('CommerceCartUi', () => {
  let component: CommerceCartUi;
  let fixture: ComponentFixture<CommerceCartUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCartUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCartUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
