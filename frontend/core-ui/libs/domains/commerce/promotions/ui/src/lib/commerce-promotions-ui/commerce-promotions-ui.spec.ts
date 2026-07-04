import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommercePromotionsUi } from './commerce-promotions-ui';

describe('CommercePromotionsUi', () => {
  let component: CommercePromotionsUi;
  let fixture: ComponentFixture<CommercePromotionsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercePromotionsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommercePromotionsUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
