import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private _historial: string[] = [];
  private apiKey = '1Es7hV1yEJjmV6WscxhNWomjSox6MQkb';
  private urlEjemplo = 'https://api.giphy.com/v1/gifs/search?api_key=1Es7hV1yEJjmV6WscxhNWomjSox6MQkb&q=dragon%20ball'

  get historial() {
    return [...this._historial];
  }

  constructor(private http:HttpClient){}

  buscarGif(buscado: string) {
    buscado = buscado.toLocaleLowerCase();
    if (buscado.trim().length == 0) {
      return;
    }
    if (this._historial.includes(buscado)) {
      return;
    }
    this._historial = this._historial.splice(0, 10);
    this._historial.unshift(buscado);

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=1Es7hV1yEJjmV6WscxhNWomjSox6MQkb&q=' + buscado)
      .subscribe( resp => {
        console.log(resp);
      });
  }
}
