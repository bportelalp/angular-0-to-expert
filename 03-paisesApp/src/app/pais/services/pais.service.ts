import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
    //Con operadores RxJs, esto devuelve si hay error un observable de arreglo vacío. of genera observable
      // .pipe(
      //     catchError(err => of([]))
      // );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }
}
