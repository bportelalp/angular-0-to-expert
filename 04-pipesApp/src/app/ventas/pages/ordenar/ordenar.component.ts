import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas : boolean = true;
  products: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  toggleMayus(){
    this.enMayusculas = !this.enMayusculas;
  }
}
