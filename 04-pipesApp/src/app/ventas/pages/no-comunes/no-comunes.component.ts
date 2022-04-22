import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Lucía';
  genero: string = 'femenino'; //masculino
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Bruno']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }




}
