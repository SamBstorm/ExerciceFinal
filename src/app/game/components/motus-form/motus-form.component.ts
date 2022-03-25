import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotusGameService } from 'src/app/services/motus-game.service';

@Component({
  selector: 'app-motus-form',
  templateUrl: './motus-form.component.html',
  styleUrls: ['./motus-form.component.scss']
})
export class MotusFormComponent implements OnInit {

  public inputs! : FormGroup;
  public tipsedWord : string [] = [];
  constructor(
    private _fb : FormBuilder,
    private _motusGame : MotusGameService
  ) { }

  ngOnInit(): void {
    this.inputs = this._fb.group({
      characters : this._fb.array([])
    });
    this.tipsedWord = this._motusGame.TipsedWord;
    for (const letter of this.tipsedWord) {
      this._addCharactersControl(letter);
    }
  }

  public getCharacters():FormArray{
    return this.inputs.get('characters') as FormArray;
  }

  private _addCharactersControl(char : string){
    this.getCharacters().push(this._fb.control(char,[Validators.required]));
  }

}
