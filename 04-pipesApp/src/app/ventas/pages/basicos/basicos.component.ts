import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'bruno';
  nombreUpper: string = 'BRUNO';
  nombreCompleto: string = 'bRunO porTeLA';

  fecha: Date = new Date(); // El día de hoy

}
