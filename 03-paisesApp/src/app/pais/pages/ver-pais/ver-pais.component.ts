import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {

    // Otra opcion usando RxJs
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.paisService.getPaisPorCode(param['id']))
      )
      .subscribe(resp => {
        console.log(resp);
      })
    //Suscribirse a cambio de url para notificar
    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorCode(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   })
  }

}
