import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsOrdersUi } from './operations-orders-ui';

describe('OperationsOrdersUi', () => {
  let component: OperationsOrdersUi;
  let fixture: ComponentFixture<OperationsOrdersUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsOrdersUi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsOrdersUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
