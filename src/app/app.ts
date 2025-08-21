import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HappyBd } from './happy-bd/happy-bd';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HappyBd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-contador-final');
}
