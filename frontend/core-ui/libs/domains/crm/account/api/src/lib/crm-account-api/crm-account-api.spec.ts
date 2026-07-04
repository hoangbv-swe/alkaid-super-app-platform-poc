import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmAccountApi } from './crm-account-api';

describe('CrmAccountApi', () => {
  let component: CrmAccountApi;
  let fixture: ComponentFixture<CrmAccountApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmAccountApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmAccountApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
