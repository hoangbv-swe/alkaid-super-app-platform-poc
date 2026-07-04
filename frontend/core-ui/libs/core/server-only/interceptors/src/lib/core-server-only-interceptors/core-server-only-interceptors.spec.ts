import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreServerOnlyInterceptors } from './core-server-only-interceptors';

describe('CoreServerOnlyInterceptors', () => {
  let component: CoreServerOnlyInterceptors;
  let fixture: ComponentFixture<CoreServerOnlyInterceptors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreServerOnlyInterceptors],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreServerOnlyInterceptors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
