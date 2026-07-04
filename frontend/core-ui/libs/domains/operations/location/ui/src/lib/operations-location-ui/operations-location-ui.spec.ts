import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsLocationUi } from './operations-location-ui';

describe('OperationsLocationUi', () => {
  let component: OperationsLocationUi;
  let fixture: ComponentFixture<OperationsLocationUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsLocationUi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsLocationUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
