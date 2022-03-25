import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeApiResolverService } from '../resolvers/poke-api-resolver.service';
import { MotusComponent } from './components/motus/motus.component';

const routes: Routes = [
  {path:'', redirectTo:'motus', pathMatch:'full'},
  {path:'motus', resolve:{word : PokeApiResolverService }, component:MotusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
