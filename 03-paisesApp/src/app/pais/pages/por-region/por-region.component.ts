import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe','oceania']
  regionActiva: string = '';

  getBotonCSS(region: string){
    return region==this.regionActiva? 'btn btn-primary m-1': 'btn btn-outline-primary m-1';
  }
  constructor() { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    this.regionActiva = region;

    //TODO- LLamar al servicio
  }
}
