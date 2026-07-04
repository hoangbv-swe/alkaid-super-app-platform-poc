import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCatalogUi } from './commerce-catalog-ui';

describe('CommerceCatalogUi', () => {
  let component: CommerceCatalogUi;
  let fixture: ComponentFixture<CommerceCatalogUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCatalogUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCatalogUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
