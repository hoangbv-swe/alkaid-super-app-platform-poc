import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceSocialHubApi } from './commerce-social-hub-api';

describe('CommerceSocialHubApi', () => {
  let component: CommerceSocialHubApi;
  let fixture: ComponentFixture<CommerceSocialHubApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceSocialHubApi],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceSocialHubApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
