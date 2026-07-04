import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmMarketingApi } from './crm-marketing-api';

describe('CrmMarketingApi', () => {
  let component: CrmMarketingApi;
  let fixture: ComponentFixture<CrmMarketingApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmMarketingApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmMarketingApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
