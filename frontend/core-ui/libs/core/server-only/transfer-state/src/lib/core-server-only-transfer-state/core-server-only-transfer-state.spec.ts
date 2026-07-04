import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreServerOnlyTransferState } from './core-server-only-transfer-state';

describe('CoreServerOnlyTransferState', () => {
  let component: CoreServerOnlyTransferState;
  let fixture: ComponentFixture<CoreServerOnlyTransferState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreServerOnlyTransferState],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreServerOnlyTransferState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
