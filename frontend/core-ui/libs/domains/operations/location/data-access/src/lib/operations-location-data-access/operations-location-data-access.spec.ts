import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsLocationDataAccess } from './operations-location-data-access';

describe('OperationsLocationDataAccess', () => {
  let component: OperationsLocationDataAccess;
  let fixture: ComponentFixture<OperationsLocationDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsLocationDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsLocationDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
