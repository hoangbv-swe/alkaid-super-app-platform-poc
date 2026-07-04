import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreSeo } from './core-seo';

describe('CoreSeo', () => {
  let component: CoreSeo;
  let fixture: ComponentFixture<CoreSeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSeo],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreSeo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
