import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li: {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  sugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.sugeridos = [];
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises) => {console.log(paises); this.paises = [...paises]},
        error: (err) => { 
          this.hayError = true;
          this.paises = [];
          console.log('Error'); console.info(err)}
      });
    
  }

  sugerencias(termino: string ){
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais(termino)
      .subscribe({
        next: paises =>{
        this.sugeridos = [...paises.splice(0,5)];
        console.log(this.sugeridos);
      },
      error: err => this.sugeridos = []})
  }

}
