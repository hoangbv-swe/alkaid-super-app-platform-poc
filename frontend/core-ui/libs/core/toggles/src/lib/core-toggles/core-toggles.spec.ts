import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreToggles } from './core-toggles';

describe('CoreToggles', () => {
  let component: CoreToggles;
  let fixture: ComponentFixture<CoreToggles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreToggles],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreToggles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
