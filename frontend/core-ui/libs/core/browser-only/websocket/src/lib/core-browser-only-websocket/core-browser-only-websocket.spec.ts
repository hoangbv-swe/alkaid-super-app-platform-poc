import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreBrowserOnlyWebsocket } from './core-browser-only-websocket';

describe('CoreBrowserOnlyWebsocket', () => {
  let component: CoreBrowserOnlyWebsocket;
  let fixture: ComponentFixture<CoreBrowserOnlyWebsocket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreBrowserOnlyWebsocket],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreBrowserOnlyWebsocket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
