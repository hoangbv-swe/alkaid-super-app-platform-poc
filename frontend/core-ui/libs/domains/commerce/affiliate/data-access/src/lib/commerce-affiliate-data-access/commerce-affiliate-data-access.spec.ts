import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceAffiliateDataAccess } from './commerce-affiliate-data-access';

describe('CommerceAffiliateDataAccess', () => {
  let component: CommerceAffiliateDataAccess;
  let fixture: ComponentFixture<CommerceAffiliateDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceAffiliateDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceAffiliateDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
