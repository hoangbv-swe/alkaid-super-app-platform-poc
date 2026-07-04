import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceCatalogApi } from './commerce-catalog-api';

describe('CommerceCatalogApi', () => {
  let component: CommerceCatalogApi;
  let fixture: ComponentFixture<CommerceCatalogApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceCatalogApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceCatalogApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
