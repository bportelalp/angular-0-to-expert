import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Lucía';
  genero: string = 'femenino'; //masculino

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

}
