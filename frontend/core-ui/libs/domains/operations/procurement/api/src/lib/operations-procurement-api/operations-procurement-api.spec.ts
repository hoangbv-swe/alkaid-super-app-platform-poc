import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsProcurementApi } from './operations-procurement-api';

describe('OperationsProcurementApi', () => {
  let component: OperationsProcurementApi;
  let fixture: ComponentFixture<OperationsProcurementApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsProcurementApi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsProcurementApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
