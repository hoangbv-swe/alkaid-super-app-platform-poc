import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreOpsPosDeskUi } from './store-ops-pos-desk-ui';

describe('StoreOpsPosDeskUi', () => {
  let component: StoreOpsPosDeskUi;
  let fixture: ComponentFixture<StoreOpsPosDeskUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOpsPosDeskUi],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOpsPosDeskUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
