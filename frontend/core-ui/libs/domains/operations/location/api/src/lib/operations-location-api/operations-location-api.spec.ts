import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsLocationApi } from './operations-location-api';

describe('OperationsLocationApi', () => {
  let component: OperationsLocationApi;
  let fixture: ComponentFixture<OperationsLocationApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsLocationApi],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsLocationApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
