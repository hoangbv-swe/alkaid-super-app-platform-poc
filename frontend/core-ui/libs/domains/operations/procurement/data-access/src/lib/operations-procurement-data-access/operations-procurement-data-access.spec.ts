import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsProcurementDataAccess } from './operations-procurement-data-access';

describe('OperationsProcurementDataAccess', () => {
  let component: OperationsProcurementDataAccess;
  let fixture: ComponentFixture<OperationsProcurementDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsProcurementDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsProcurementDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
