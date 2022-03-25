import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MotusGameService } from 'src/app/services/motus-game.service';

@Component({
  selector: 'app-motus',
  templateUrl: './motus.component.html',
  styleUrls: ['./motus.component.scss']
})
export class MotusComponent implements OnInit {
  
  constructor(
    private _activatedRoute : ActivatedRoute,
    private _motusGame : MotusGameService
  ) { }

  ngOnInit(): void {
    this._motusGame.start(this._activatedRoute.snapshot.data['word'],6);
  }

}
