import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCatalogDataAccess } from './commerce-catalog-data-access';

describe('CommerceCatalogDataAccess', () => {
  let component: CommerceCatalogDataAccess;
  let fixture: ComponentFixture<CommerceCatalogDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCatalogDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCatalogDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
