import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthApi } from './auth-api';

describe('AuthApi', () => {
  let component: AuthApi;
  let fixture: ComponentFixture<AuthApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthApi],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
