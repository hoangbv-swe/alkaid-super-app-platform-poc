import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsLogisticsUi } from './operations-logistics-ui';

describe('OperationsLogisticsUi', () => {
  let component: OperationsLogisticsUi;
  let fixture: ComponentFixture<OperationsLogisticsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsLogisticsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsLogisticsUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
