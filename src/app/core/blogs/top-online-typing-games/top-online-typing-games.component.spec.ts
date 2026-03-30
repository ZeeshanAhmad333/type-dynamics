import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOnlineTypingGamesComponent } from './top-online-typing-games.component';

describe('TopOnlineTypingGamesComponent', () => {
  let component: TopOnlineTypingGamesComponent;
  let fixture: ComponentFixture<TopOnlineTypingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopOnlineTypingGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopOnlineTypingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
