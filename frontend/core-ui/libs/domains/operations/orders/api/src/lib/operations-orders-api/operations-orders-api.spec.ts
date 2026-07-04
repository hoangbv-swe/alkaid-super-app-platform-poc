import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsOrdersApi } from './operations-orders-api';

describe('OperationsOrdersApi', () => {
  let component: OperationsOrdersApi;
  let fixture: ComponentFixture<OperationsOrdersApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsOrdersApi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsOrdersApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
