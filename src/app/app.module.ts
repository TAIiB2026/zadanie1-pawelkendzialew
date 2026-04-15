import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactorComponent } from './reaktor/reaktor.component';
import { PodkreslenieDirective } from './podkreslenie.directive';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [AppComponent, ReactorComponent, PodkreslenieDirective],
  imports: [BrowserModule, AppRoutingModule, CommonModule, ListaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }