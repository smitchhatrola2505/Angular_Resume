import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { iMovie } from './Movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url  = "https://moviesapi27.herokuapp.com/api/movies"
  constructor(private _http:HttpClient) { }
  getMovies():Observable<iMovie[]>{
    return this._http.get<iMovie[]>(this.url);
  }
}
