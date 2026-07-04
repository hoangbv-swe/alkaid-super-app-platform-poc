import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsAnalyticsUi } from './store-ops-analytics-ui';

describe('StoreOpsAnalyticsUi', () => {
  let component: StoreOpsAnalyticsUi;
  let fixture: ComponentFixture<StoreOpsAnalyticsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsAnalyticsUi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsAnalyticsUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
