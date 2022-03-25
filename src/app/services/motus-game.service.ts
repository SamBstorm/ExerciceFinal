import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotusGameService {

  private _word : string[] = [];
  private _attemptsLimit : number = 0;
  private _tips : number[] = [];
  private _attempts : string[][] = [];

  public get Word():string[] { return this._word; }
  public get Tips():number[] { return this._tips; }
  public get TipsedWord():string[] { 
    let result : string[] = []
    for(let i = 0;i<this._word.length; i++){
      if(this._tips.includes(i)) result.push(this._word[i])
      else result.push('.')
    }
    return result;
  }
  public get Attempts():string[][] { return this._attempts; }
  public get AttemptsLimit():number { return this._attemptsLimit; }


  constructor() { }

  public start(word : string[], attemptLimit : number){
    //Définir un mot
    this._word = word;
    //Définir les indices
    this._setTips();
    //Definir le nombre d'essais
    this._attemptsLimit = attemptLimit;
    //Demander un mot du même nombre de caractères
    //Tantque le mot n'est pas trouver et que le nombre d'essais n'est pas atteint :
    //analyser chaque caractère du mot proposer
    //si pas présent : gris
    //si présent mais pas bon endroit : jaune
    //sinon : rouge
    //Ajouter un essais
    //Demander un mot du même nombre de caractères
  }

  private _setTips(){
    let limitTips : number = Math.floor(this._word.length / 3);
    this._tips.push(this._randomIndex());
    for (let i = 1; i < limitTips; i++) {
      let rand : number = this._randomIndex();
      if(this._tips.includes(rand)) i--;
      else this._tips.push(rand);
    }
  }

  private _randomIndex(): number {
    return Math.floor(Math.random()*(this._word.length));
  }
}
