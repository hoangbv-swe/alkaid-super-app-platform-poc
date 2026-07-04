import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreServerOnlyServices } from './core-server-only-services';

describe('CoreServerOnlyServices', () => {
  let component: CoreServerOnlyServices;
  let fixture: ComponentFixture<CoreServerOnlyServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreServerOnlyServices],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreServerOnlyServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
