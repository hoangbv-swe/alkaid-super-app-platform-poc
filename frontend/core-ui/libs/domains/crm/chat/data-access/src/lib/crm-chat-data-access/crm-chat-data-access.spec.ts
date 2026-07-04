import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmChatDataAccess } from './crm-chat-data-access';

describe('CrmChatDataAccess', () => {
  let component: CrmChatDataAccess;
  let fixture: ComponentFixture<CrmChatDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmChatDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmChatDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
