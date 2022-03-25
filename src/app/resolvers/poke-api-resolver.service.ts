import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeApiService } from '../services/poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class PokeApiResolverService implements Resolve<string[]> {

  private _id : number = Math.floor((Math.random()*150))+1;

  constructor(
    private _pokeApi : PokeApiService
    ) { }
    
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this._pokeApi.getWord(this._id);
  }
}
