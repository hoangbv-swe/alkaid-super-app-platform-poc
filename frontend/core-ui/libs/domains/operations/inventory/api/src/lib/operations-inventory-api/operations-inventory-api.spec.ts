import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsInventoryApi } from './operations-inventory-api';

describe('OperationsInventoryApi', () => {
  let component: OperationsInventoryApi;
  let fixture: ComponentFixture<OperationsInventoryApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsInventoryApi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsInventoryApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
