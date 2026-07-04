import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmAccountUi } from './crm-account-ui';

describe('CrmAccountUi', () => {
  let component: CrmAccountUi;
  let fixture: ComponentFixture<CrmAccountUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmAccountUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmAccountUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
