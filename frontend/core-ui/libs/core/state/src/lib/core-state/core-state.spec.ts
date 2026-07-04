import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreState } from './core-state';

describe('CoreState', () => {
  let component: CoreState;
  let fixture: ComponentFixture<CoreState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreState],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
