import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedForms } from './shared-forms';

describe('SharedForms', () => {
  let component: SharedForms;
  let fixture: ComponentFixture<SharedForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedForms],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
