import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsAnalyticsApi } from './store-ops-analytics-api';

describe('StoreOpsAnalyticsApi', () => {
  let component: StoreOpsAnalyticsApi;
  let fixture: ComponentFixture<StoreOpsAnalyticsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsAnalyticsApi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsAnalyticsApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
