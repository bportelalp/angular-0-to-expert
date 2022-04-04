import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apikey: string = 'UibFSCM6pyL5rp4bG8ukbO7dZyn2oL0w'
  private _historial: string[] = [];

  //TODO: Cambiar any por su tipo
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    // Esto devuelve un observable, es equivalente a un predicate en C#
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=UibFSCM6pyL5rp4bG8ukbO7dZyn2oL0w&q=${query}&limit=10`)
      .subscribe((resp: SearchGifsResponse) => {
        console.log(resp.data)
        this.resultados = resp.data;
      });

    
    
  }
}
