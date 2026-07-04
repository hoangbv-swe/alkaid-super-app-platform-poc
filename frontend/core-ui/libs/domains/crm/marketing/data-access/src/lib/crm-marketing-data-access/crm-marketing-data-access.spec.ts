import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmMarketingDataAccess } from './crm-marketing-data-access';

describe('CrmMarketingDataAccess', () => {
  let component: CrmMarketingDataAccess;
  let fixture: ComponentFixture<CrmMarketingDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmMarketingDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmMarketingDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
