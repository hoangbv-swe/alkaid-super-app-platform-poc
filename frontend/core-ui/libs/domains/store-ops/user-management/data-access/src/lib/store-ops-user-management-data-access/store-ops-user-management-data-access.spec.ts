import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsUserManagementDataAccess } from './store-ops-user-management-data-access';

describe('StoreOpsUserManagementDataAccess', () => {
  let component: StoreOpsUserManagementDataAccess;
  let fixture: ComponentFixture<StoreOpsUserManagementDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsUserManagementDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsUserManagementDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
