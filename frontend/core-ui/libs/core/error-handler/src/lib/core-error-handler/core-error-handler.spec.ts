import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreErrorHandler } from './core-error-handler';

describe('CoreErrorHandler', () => {
  let component: CoreErrorHandler;
  let fixture: ComponentFixture<CoreErrorHandler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreErrorHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreErrorHandler);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
