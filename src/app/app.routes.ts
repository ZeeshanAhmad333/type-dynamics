import { Routes } from '@angular/router';
import { KeyboardInputComponent } from './features/game/components/keyboard-input/keyboard-input.component';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
    {path: 'keyboard', component: KeyboardInputComponent},
    {path: '', component: HomeComponent}
];
