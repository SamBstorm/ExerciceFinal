import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private _http : HttpClient
  ) { }

  public getWord(id: number) : Observable<string[]>{
    return this._http.get<any>(environment.baseApiUrl+'pokemon/'+id)
    .pipe(
      map(pkmn=>pkmn.name.split(''))
      );
  }
}
