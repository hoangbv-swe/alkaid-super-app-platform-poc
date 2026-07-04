import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsUserManagementUi } from './store-ops-user-management-ui';

describe('StoreOpsUserManagementUi', () => {
  let component: StoreOpsUserManagementUi;
  let fixture: ComponentFixture<StoreOpsUserManagementUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsUserManagementUi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsUserManagementUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
