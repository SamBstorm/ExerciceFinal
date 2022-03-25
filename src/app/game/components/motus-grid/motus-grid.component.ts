import { Component, Input, OnInit } from '@angular/core';
import { MotusGameService } from 'src/app/services/motus-game.service';

@Component({
  selector: 'app-motus-grid',
  templateUrl: './motus-grid.component.html',
  styleUrls: ['./motus-grid.component.scss']
})
export class MotusGridComponent implements OnInit {

  public word : string[] = [];
  public attemptLimit : number = 0;
  public tips : number[] = [];
  public attempts : string[][] = [];


  constructor(
    private _motusGame : MotusGameService
  ) { }

  ngOnInit(): void {
    this.word = this._motusGame.Word;
    this.tips = this._motusGame.Tips;
    this.attempts = this._motusGame.Attempts;
    this.attemptLimit = this._motusGame.AttemptsLimit;
  }

  public addWord(word : string){
    if(this.attemptLimit && this.attempts.length >= this.attemptLimit) throw new Error("No new attempt is available.");
    word = word.trim();
    if(word.length != this.word.length) throw new Error("attempt word is not correct length.");
    this.attempts.push(word.split(''));
  }

}
