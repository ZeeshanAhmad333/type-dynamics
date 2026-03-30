import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveTypingSpeedComponent } from './improve-typing-speed.component';

describe('ImproveTypingSpeedComponent', () => {
  let component: ImproveTypingSpeedComponent;
  let fixture: ComponentFixture<ImproveTypingSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImproveTypingSpeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImproveTypingSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
