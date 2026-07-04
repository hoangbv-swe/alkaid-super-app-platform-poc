import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsPosDeskApi } from './store-ops-pos-desk-api';

describe('StoreOpsPosDeskApi', () => {
  let component: StoreOpsPosDeskApi;
  let fixture: ComponentFixture<StoreOpsPosDeskApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsPosDeskApi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsPosDeskApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
