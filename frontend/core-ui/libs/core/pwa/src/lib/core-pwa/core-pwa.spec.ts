import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorePwa } from './core-pwa';

describe('CorePwa', () => {
  let component: CorePwa;
  let fixture: ComponentFixture<CorePwa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorePwa],
    }).compileComponents();

    fixture = TestBed.createComponent(CorePwa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
