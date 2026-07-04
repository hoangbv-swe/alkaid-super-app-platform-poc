import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedAnimations } from './shared-animations';

describe('SharedAnimations', () => {
  let component: SharedAnimations;
  let fixture: ComponentFixture<SharedAnimations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedAnimations],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedAnimations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
