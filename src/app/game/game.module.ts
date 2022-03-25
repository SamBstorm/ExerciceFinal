import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { MotusComponent } from './components/motus/motus.component';
import { MotusGridComponent } from './components/motus-grid/motus-grid.component';
import { MotusFormComponent } from './components/motus-form/motus-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MotusComponent,
    MotusGridComponent,
    MotusFormComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
