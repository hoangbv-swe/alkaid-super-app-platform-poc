import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrmChatApi } from './crm-chat-api';

describe('CrmChatApi', () => {
  let component: CrmChatApi;
  let fixture: ComponentFixture<CrmChatApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmChatApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CrmChatApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
