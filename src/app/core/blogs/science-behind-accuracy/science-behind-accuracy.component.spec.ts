import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceBehindAccuracyComponent } from './science-behind-accuracy.component';

describe('ScienceBehindAccuracyComponent', () => {
  let component: ScienceBehindAccuracyComponent;
  let fixture: ComponentFixture<ScienceBehindAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceBehindAccuracyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceBehindAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
