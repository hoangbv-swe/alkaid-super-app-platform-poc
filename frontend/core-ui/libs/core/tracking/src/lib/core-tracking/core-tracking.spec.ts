import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreTracking } from './core-tracking';

describe('CoreTracking', () => {
  let component: CoreTracking;
  let fixture: ComponentFixture<CoreTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTracking],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
