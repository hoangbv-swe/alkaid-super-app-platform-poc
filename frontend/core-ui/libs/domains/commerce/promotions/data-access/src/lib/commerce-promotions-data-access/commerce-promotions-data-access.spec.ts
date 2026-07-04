import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommercePromotionsDataAccess } from './commerce-promotions-data-access';

describe('CommercePromotionsDataAccess', () => {
  let component: CommercePromotionsDataAccess;
  let fixture: ComponentFixture<CommercePromotionsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercePromotionsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CommercePromotionsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
