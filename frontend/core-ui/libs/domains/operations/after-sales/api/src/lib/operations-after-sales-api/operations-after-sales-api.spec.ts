import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsAfterSalesApi } from './operations-after-sales-api';

describe('OperationsAfterSalesApi', () => {
  let component: OperationsAfterSalesApi;
  let fixture: ComponentFixture<OperationsAfterSalesApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsAfterSalesApi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsAfterSalesApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
