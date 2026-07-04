import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsInventoryUi } from './operations-inventory-ui';

describe('OperationsInventoryUi', () => {
  let component: OperationsInventoryUi;
  let fixture: ComponentFixture<OperationsInventoryUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsInventoryUi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsInventoryUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
