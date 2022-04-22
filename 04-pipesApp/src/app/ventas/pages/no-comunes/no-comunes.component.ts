import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
  clientes: string[] = ['David','Bruno','Celeiro','Xulia','Juan']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.genero == 'femenino'){
      this.genero = 'masculino';
      this.nombre = 'Bruno'
    }
    else {
      this.genero = 'femenino';
      this.nombre = 'Lucía'
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //KeyValuePipe
  persona = {
    nombre: 'Bruno',
    edad: 24,
    localidad: 'Vigo, Galiza'
  }

  //async pipe
  /**
   * El pipe async va a suscribirse al observable e imprimir todas sus emisiones
   */
  miObservable = interval(1000); // 0,1,2... va a emitirlos

  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(()=> {
      resolve('Fin de la promesa')
    }, 3500);
  })

}
