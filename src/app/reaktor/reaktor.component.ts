import { Component, Input, signal, computed } from '@angular/core';

@Component({
  selector: 'app-reaktor',
  standalone: false,
  templateUrl: './reaktor.component.html',
  styles: []
})
export class ReactorComponent {
  @Input() nazwa: string = '';
  temperatura: number = 0;

  temperaturaSignal = signal<number>(0);

  statusSignal = computed(() => {
    if (this.temperaturaSignal() < 16) return 'Rdzen reaktora jest zimny';
    if (this.temperaturaSignal() <= 90) return 'Temperatura reaktora jest w normie';
    return 'Reaktor jest w stanie krytycznym';
  });

  podniesToperature() {
    if (this.temperatura < 100) {
      this.temperatura += 10;
    }
    if (this.temperaturaSignal() < 100) {
      this.temperaturaSignal.update(t => t + 10);
    }
  }
}