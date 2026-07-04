import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedLayouts } from './shared-layouts';

describe('SharedLayouts', () => {
  let component: SharedLayouts;
  let fixture: ComponentFixture<SharedLayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLayouts],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedLayouts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
