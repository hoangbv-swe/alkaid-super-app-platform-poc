import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreI18n } from './core-i18n';

describe('CoreI18n', () => {
  let component: CoreI18n;
  let fixture: ComponentFixture<CoreI18n>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreI18n],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreI18n);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
