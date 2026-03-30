import { Injectable } from '@angular/core';

export interface Missile {
  id: number;
  word: string;
  x: number;
  y: number;
  speed: number;
  destroyed: boolean;
}

export interface Bullet {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  targetId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectileService {

  missiles: Missile[] = [];
  bullets: Bullet[] = [];

  input = '';
  score = 0;
  lives = 5;

  totalTyped = 0;
  correctTyped = 0;

  timeLeft = 30;
  isGameOver = false;

  private words = [
    'fire', 'attack', 'destroy', 'focus', 'speed',
    'target', 'angular', 'battle', 'strike', 'power'
  ];

  private id = 0;

  spawnMissile() {
    const word = this.words[Math.floor(Math.random() * this.words.length)];

    this.missiles.push({
      id: this.id++,
      word,
      x: Math.random() * 80 + 10,
      y: 0,
      speed: 0.3 + Math.random() * 0.4,
      destroyed: false
    });
  }

  updateGame() {
    if (this.isGameOver) return;

    // Move missiles
    this.missiles.forEach(m => {
      if (!m.destroyed) {
        m.y += m.speed;

        if (m.y > 95) {
          m.destroyed = true;
          this.lives--;
        }
      }
    });

    // Move bullets (ARTILLERY STYLE → curve)
    this.bullets.forEach(b => {
      b.y -= 2;
      b.x += (b.targetX - b.x) * 0.05;
    });

    // Collision
    this.bullets.forEach(b => {
      const target = this.missiles.find(m => m.id === b.targetId && !m.destroyed);

      if (target && Math.abs(target.y - b.y) < 3) {
        target.destroyed = true;
        this.score += 10;
      }
    });

    // Cleanup
    this.missiles = this.missiles.filter(m => !m.destroyed);
    this.bullets = this.bullets.filter(b => b.y > 0);

    if (this.lives <= 0) {
      this.isGameOver = true;
    }
  }

  handleTyping(key: string) {
    if (this.isGameOver) return;

    this.input += key;
    this.totalTyped++;

    const target = this.missiles.find(m => m.word.startsWith(this.input));

    if (!target) {
      this.input = '';
      return;
    }

    if (target.word === this.input) {
      this.correctTyped += this.input.length;

      // FIRE ARTILLERY BULLET
      this.bullets.push({
        x: 50,
        y: 90,
        targetX: target.x,
        targetY: target.y,
        targetId: target.id
      });

      this.input = '';
    }
  }

  calculateWPM() {
    return Math.round((this.correctTyped / 5) / (30 / 60));
  }

  accuracy() {
    return this.totalTyped === 0
      ? 0
      : Math.round((this.correctTyped / this.totalTyped) * 100);
  }

  reset() {
    this.missiles = [];
    this.bullets = [];
    this.score = 0;
    this.lives = 5;
    this.input = '';
    this.totalTyped = 0;
    this.correctTyped = 0;
    this.timeLeft = 30;
    this.isGameOver = false;
  }
}