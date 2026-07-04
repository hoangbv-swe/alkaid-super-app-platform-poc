import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsInventoryDataAccess } from './operations-inventory-data-access';

describe('OperationsInventoryDataAccess', () => {
  let component: OperationsInventoryDataAccess;
  let fixture: ComponentFixture<OperationsInventoryDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsInventoryDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsInventoryDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
