import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypingService {

  private paragraphs: string[] = [
    'The quick brown fox jumps over the lazy dog.',
    'Typing fast requires practice and consistency every day.',
    'Angular makes it easy to build modern web applications.',
    'Focus on accuracy first, then improve your speed gradually.'
  ];

  getParagraph(): string {
    const index = Math.floor(Math.random() * this.paragraphs.length);
    return this.paragraphs[index];
  }
}
