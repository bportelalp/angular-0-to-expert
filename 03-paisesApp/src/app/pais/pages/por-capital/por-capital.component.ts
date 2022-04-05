import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];


  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
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
    //TODO - Hacer sugerencias
  }
}
