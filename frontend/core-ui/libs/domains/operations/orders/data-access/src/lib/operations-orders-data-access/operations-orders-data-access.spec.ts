import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsOrdersDataAccess } from './operations-orders-data-access';

describe('OperationsOrdersDataAccess', () => {
  let component: OperationsOrdersDataAccess;
  let fixture: ComponentFixture<OperationsOrdersDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsOrdersDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsOrdersDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
