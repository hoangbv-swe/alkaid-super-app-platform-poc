import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCartApi } from './commerce-cart-api';

describe('CommerceCartApi', () => {
  let component: CommerceCartApi;
  let fixture: ComponentFixture<CommerceCartApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCartApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCartApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
