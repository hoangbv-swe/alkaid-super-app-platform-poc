import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceAffiliateApi } from './commerce-affiliate-api';

describe('CommerceAffiliateApi', () => {
  let component: CommerceAffiliateApi;
  let fixture: ComponentFixture<CommerceAffiliateApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceAffiliateApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceAffiliateApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
