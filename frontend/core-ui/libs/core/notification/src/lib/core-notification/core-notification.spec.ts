import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreNotification } from './core-notification';

describe('CoreNotification', () => {
  let component: CoreNotification;
  let fixture: ComponentFixture<CoreNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreNotification],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreNotification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
