import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceSocialHubUi } from './commerce-social-hub-ui';

describe('CommerceSocialHubUi', () => {
  let component: CommerceSocialHubUi;
  let fixture: ComponentFixture<CommerceSocialHubUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceSocialHubUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceSocialHubUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
