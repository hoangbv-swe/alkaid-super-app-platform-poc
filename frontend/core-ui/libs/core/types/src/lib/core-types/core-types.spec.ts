import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreTypes } from './core-types';

describe('CoreTypes', () => {
  let component: CoreTypes;
  let fixture: ComponentFixture<CoreTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
