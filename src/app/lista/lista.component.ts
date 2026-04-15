import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent {
  elementy: string[] = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];
}