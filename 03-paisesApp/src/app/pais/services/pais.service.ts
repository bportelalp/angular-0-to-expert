import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<any> {
    
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get(url);
    //Con operadores RxJs, esto devuelve si hay error un observable de arreglo vacío. of genera observable
      // .pipe(
      //     catchError(err => of([]))
      // );
  }
}
