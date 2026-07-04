import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreFacades } from './core-facades';

describe('CoreFacades', () => {
  let component: CoreFacades;
  let fixture: ComponentFixture<CoreFacades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreFacades],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreFacades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
