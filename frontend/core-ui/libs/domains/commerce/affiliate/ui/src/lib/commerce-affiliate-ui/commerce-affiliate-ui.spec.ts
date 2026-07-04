import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceAffiliateUi } from './commerce-affiliate-ui';

describe('CommerceAffiliateUi', () => {
  let component: CommerceAffiliateUi;
  let fixture: ComponentFixture<CommerceAffiliateUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceAffiliateUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceAffiliateUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
