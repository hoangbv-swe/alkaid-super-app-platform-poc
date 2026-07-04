import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreBrowserOnlyStorage } from './core-browser-only-storage';

describe('CoreBrowserOnlyStorage', () => {
  let component: CoreBrowserOnlyStorage;
  let fixture: ComponentFixture<CoreBrowserOnlyStorage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreBrowserOnlyStorage],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreBrowserOnlyStorage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
