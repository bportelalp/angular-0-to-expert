import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //Es un observable
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
         console.log('debouncer: ', valor);
      })
  }


  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }

}
