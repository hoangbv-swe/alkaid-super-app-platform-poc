import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCartDataAccess } from './commerce-cart-data-access';

describe('CommerceCartDataAccess', () => {
  let component: CommerceCartDataAccess;
  let fixture: ComponentFixture<CommerceCartDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCartDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCartDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
