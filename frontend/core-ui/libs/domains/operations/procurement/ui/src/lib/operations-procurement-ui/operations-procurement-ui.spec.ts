import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsProcurementUi } from './operations-procurement-ui';

describe('OperationsProcurementUi', () => {
  let component: OperationsProcurementUi;
  let fixture: ComponentFixture<OperationsProcurementUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsProcurementUi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsProcurementUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
