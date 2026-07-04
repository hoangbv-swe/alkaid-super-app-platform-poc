import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedValidators } from './shared-validators';

describe('SharedValidators', () => {
  let component: SharedValidators;
  let fixture: ComponentFixture<SharedValidators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedValidators],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedValidators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
