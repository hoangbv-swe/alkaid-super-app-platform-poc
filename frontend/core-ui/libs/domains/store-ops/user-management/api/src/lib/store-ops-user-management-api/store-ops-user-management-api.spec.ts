import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsUserManagementApi } from './store-ops-user-management-api';

describe('StoreOpsUserManagementApi', () => {
  let component: StoreOpsUserManagementApi;
  let fixture: ComponentFixture<StoreOpsUserManagementApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsUserManagementApi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsUserManagementApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
