import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsPosDeskDataAccess } from './store-ops-pos-desk-data-access';

describe('StoreOpsPosDeskDataAccess', () => {
  let component: StoreOpsPosDeskDataAccess;
  let fixture: ComponentFixture<StoreOpsPosDeskDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsPosDeskDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsPosDeskDataAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
