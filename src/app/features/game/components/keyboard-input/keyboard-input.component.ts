import { Component, OnInit } from '@angular/core';
import { TypingService } from '../../services/typing.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keyboard-input',
  imports:[CommonModule, RouterModule, FormsModule],
  templateUrl: './keyboard-input.component.html',
  styleUrls: ['./keyboard-input.component.scss']
})
export class KeyboardInputComponent implements OnInit {

  paragraph: string = '';
  userInput: string = '';

  correctChars = 0;
  totalTyped = 0;
  accuracy = 0;
  wpm = 0;
  startTime: number = 0;
  isStarted = false;

  constructor(private typingService: TypingService) {}

  ngOnInit(): void {
    this.paragraph = this.typingService.getParagraph();
  }

  onInputChange(value: string) {
    if (!this.isStarted) {
      this.startTime = Date.now();
      this.isStarted = true;
    }

    this.userInput = value;
    this.calculateStats();
  }

  calculateStats() {
    this.totalTyped = this.userInput.length;
    this.correctChars = 0;

    for (let i = 0; i < this.userInput.length; i++) {
      if (this.userInput[i] === this.paragraph[i]) {
        this.correctChars++;
      }
    }

    this.accuracy = this.totalTyped
      ? Math.round((this.correctChars / this.totalTyped) * 100)
      : 0;

    const timeElapsed = (Date.now() - this.startTime) / 60000; // minutes
    this.wpm = timeElapsed
      ? Math.round((this.correctChars / 5) / timeElapsed)
      : 0;
  }

  getHighlightedText() {
    return this.paragraph.split('').map((char, index) => {
      if (index < this.userInput.length) {
        return {
          char,
          class: this.userInput[index] === char ? 'correct' : 'incorrect'
        };
      }
      return { char, class: '' };
    });
  }

  reset() {
    this.userInput = '';
    this.correctChars = 0;
    this.totalTyped = 0;
    this.accuracy = 0;
    this.wpm = 0;
    this.isStarted = false;
    this.paragraph = this.typingService.getParagraph();
  }
}
