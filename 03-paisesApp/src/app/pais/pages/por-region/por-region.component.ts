import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe','oceania']
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  getBotonCSS(region: string){
    return region==this.regionActiva? 'btn btn-primary m-1': 'btn btn-outline-primary m-1';
  }
  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    if(this.regionActiva === region){
      return;
    }
    this.paises = [];
    this.regionActiva = region;

    //TODO- LLamar al servicio
    this.paisService.buscarRegion(region)
      .subscribe({
        next: (paises)=> this.paises = paises,
        error: (err) => { 
          this.hayError = true;
          this.paises = [];
          console.log('Error'); console.info(err)}
      }
    );
  }
}
