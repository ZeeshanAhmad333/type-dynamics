import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: []
})
export class HomeComponent {

  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['/game']);
  }

  practiceMode() {
    this.router.navigate(['/practice']);
  }
}