import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ProjectileService } from '../../services/projectile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectile.component.html',
  styleUrls: ['./projectile.component.scss']
})
export class ProjectileComponent implements OnInit, OnDestroy {

  gameLoop!: any;
  spawnLoop!: any;
  timerLoop!: any;

  shootSound = new Audio('assets/shoot.mp3');

  constructor(public game: ProjectileService) {}

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.game.reset();

    this.spawnLoop = setInterval(() => {
      this.game.spawnMissile();
    }, 1000);

    this.gameLoop = setInterval(() => {
      this.game.updateGame();
    }, 30);

    this.timerLoop = setInterval(() => {
      this.game.timeLeft--;

      if (this.game.timeLeft <= 0) {
        this.game.isGameOver = true;
        this.clearLoops();
      }
    }, 1000);
  }

  fireSound() {
    this.shootSound.currentTime = 0;
    this.shootSound.play();
  }

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (/^[a-zA-Z]$/.test(event.key)) {
      this.game.handleTyping(event.key.toLowerCase());

      // PLAY SOUND WHEN BULLET FIRES
      if (this.game.input === '') {
        this.fireSound();
      }
    }
  }

  clearLoops() {
    clearInterval(this.spawnLoop);
    clearInterval(this.gameLoop);
    clearInterval(this.timerLoop);
  }

  ngOnDestroy() {
    this.clearLoops();
  }
}