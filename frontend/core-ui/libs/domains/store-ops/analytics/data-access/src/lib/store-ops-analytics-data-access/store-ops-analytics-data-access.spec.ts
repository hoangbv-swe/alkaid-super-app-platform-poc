import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsAnalyticsDataAccess } from './store-ops-analytics-data-access';

describe('StoreOpsAnalyticsDataAccess', () => {
  let component: StoreOpsAnalyticsDataAccess;
  let fixture: ComponentFixture<StoreOpsAnalyticsDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsAnalyticsDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsAnalyticsDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
