import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsLogisticsDataAccess } from './operations-logistics-data-access';

describe('OperationsLogisticsDataAccess', () => {
  let component: OperationsLogisticsDataAccess;
  let fixture: ComponentFixture<OperationsLogisticsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsLogisticsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsLogisticsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
