import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey = '1Es7hV1yEJjmV6WscxhNWomjSox6MQkb';
  public resultado: Gif[] = [];
  private servicioUrl='https://api.giphy.com/v1/gifs';

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if(localStorage.getItem('historial')){
    //   this._historial=JSON.parse(localStorage.getItem('historial')!);
    // }
    //this.resultado=JSON.parse(localStorage.getItem('resultados')!)||[];
  }

  buscarGif(buscado: string) {
    buscado = buscado.toLocaleLowerCase();
    if (buscado.trim().length == 0) {
      return;
    }
    // if (this._historial.includes(buscado)) {
    //   return;
    // }
    this._historial.unshift(buscado);
    this._historial = this._historial.splice(0, 10);

    localStorage.setItem('historial', JSON.stringify(this._historial));

    const params=new HttpParams()
      .set('apiKey', this.apiKey)
      .set('q', buscado);

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
      .subscribe((resp) => {
        console.log(resp);
        this.resultado = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultado));
      });
  }
}
