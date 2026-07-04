import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsAfterSalesDataAccess } from './operations-after-sales-data-access';

describe('OperationsAfterSalesDataAccess', () => {
  let component: OperationsAfterSalesDataAccess;
  let fixture: ComponentFixture<OperationsAfterSalesDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsAfterSalesDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsAfterSalesDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
