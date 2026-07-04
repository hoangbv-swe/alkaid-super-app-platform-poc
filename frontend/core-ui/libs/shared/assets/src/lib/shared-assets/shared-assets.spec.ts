import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedAssets } from './shared-assets';

describe('SharedAssets', () => {
  let component: SharedAssets;
  let fixture: ComponentFixture<SharedAssets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedAssets],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedAssets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
