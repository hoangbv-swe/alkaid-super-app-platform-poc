import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreBrowserOnlyNetworkStatus } from './core-browser-only-network-status';

describe('CoreBrowserOnlyNetworkStatus', () => {
  let component: CoreBrowserOnlyNetworkStatus;
  let fixture: ComponentFixture<CoreBrowserOnlyNetworkStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreBrowserOnlyNetworkStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreBrowserOnlyNetworkStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
