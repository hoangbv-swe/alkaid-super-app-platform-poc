import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmChatUi } from './crm-chat-ui';

describe('CrmChatUi', () => {
  let component: CrmChatUi;
  let fixture: ComponentFixture<CrmChatUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmChatUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmChatUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
