import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmMarketingUi } from './crm-marketing-ui';

describe('CrmMarketingUi', () => {
  let component: CrmMarketingUi;
  let fixture: ComponentFixture<CrmMarketingUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmMarketingUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmMarketingUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
