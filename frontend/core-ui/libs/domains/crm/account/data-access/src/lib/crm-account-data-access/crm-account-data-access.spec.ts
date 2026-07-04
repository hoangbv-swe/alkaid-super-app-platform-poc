import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmAccountDataAccess } from './crm-account-data-access';

describe('CrmAccountDataAccess', () => {
  let component: CrmAccountDataAccess;
  let fixture: ComponentFixture<CrmAccountDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmAccountDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmAccountDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
