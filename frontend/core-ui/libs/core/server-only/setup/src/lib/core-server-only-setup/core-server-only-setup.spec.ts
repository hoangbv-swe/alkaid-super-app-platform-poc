import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreServerOnlySetup } from './core-server-only-setup';

describe('CoreServerOnlySetup', () => {
  let component: CoreServerOnlySetup;
  let fixture: ComponentFixture<CoreServerOnlySetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreServerOnlySetup],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreServerOnlySetup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
