import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerceSocialHubDataAccess } from './commerce-social-hub-data-access';

describe('CommerceSocialHubDataAccess', () => {
  let component: CommerceSocialHubDataAccess;
  let fixture: ComponentFixture<CommerceSocialHubDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommerceSocialHubDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CommerceSocialHubDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
