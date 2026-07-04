import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreServerOnlyTokens } from './core-server-only-tokens';

describe('CoreServerOnlyTokens', () => {
  let component: CoreServerOnlyTokens;
  let fixture: ComponentFixture<CoreServerOnlyTokens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreServerOnlyTokens],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreServerOnlyTokens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
