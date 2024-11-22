import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { TrainerModule } from './trainer/trainer.module';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';

@NgModule({
  declarations: [AppComponent, TrainerListComponent, TrainerDetailComponent],
  imports: [BrowserModule, AppRoutingModule, PokemonModule, TrainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
