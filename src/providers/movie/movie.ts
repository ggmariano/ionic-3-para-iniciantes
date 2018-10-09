import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private apiKey = "1d3b1686582738f18491a14c6ec9ae4e";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath+"/movie/popular?api_key="+this.apiKey);
  }

}
