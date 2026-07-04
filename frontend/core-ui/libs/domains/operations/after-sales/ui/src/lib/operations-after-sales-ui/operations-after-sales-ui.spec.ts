import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsAfterSalesUi } from './operations-after-sales-ui';

describe('OperationsAfterSalesUi', () => {
  let component: OperationsAfterSalesUi;
  let fixture: ComponentFixture<OperationsAfterSalesUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsAfterSalesUi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsAfterSalesUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
