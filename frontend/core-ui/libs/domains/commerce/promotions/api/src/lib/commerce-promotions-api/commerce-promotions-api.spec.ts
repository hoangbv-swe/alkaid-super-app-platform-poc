import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommercePromotionsApi } from './commerce-promotions-api';

describe('CommercePromotionsApi', () => {
  let component: CommercePromotionsApi;
  let fixture: ComponentFixture<CommercePromotionsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercePromotionsApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommercePromotionsApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
