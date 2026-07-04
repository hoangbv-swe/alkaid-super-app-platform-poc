import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsLogisticsApi } from './operations-logistics-api';

describe('OperationsLogisticsApi', () => {
  let component: OperationsLogisticsApi;
  let fixture: ComponentFixture<OperationsLogisticsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsLogisticsApi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsLogisticsApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
