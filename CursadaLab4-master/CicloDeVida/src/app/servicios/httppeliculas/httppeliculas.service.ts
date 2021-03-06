import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttppeliculasService {

  constructor(public http: HttpClient) { }

  public url = 'http://api.themoviedb.org/3/trending/all/day?api_key=73f9841cbba42072a2e1203892c07179';
  private urlCfg = 'https://api.themoviedb.org/3/configuration?api_key=73f9841cbba42072a2e1203892c07179';

  public httpGetO (url: string): Observable<any> {
    return this.http.get( url )
      .pipe( res => res);
  }

  public httpGetCfg (): Observable<any> {
    return this.http.get( this.urlCfg )
      .pipe( res => res);
  }

  public getUrlDetalle(id: string): string
  {
    return 'https://api.themoviedb.org/3/movie/' + id + '?api_key=73f9841cbba42072a2e1203892c07179&language=es-AR';
  }
}
