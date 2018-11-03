import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Rutas
import { routing, appRoutingProviders } from './app.routes';
// Servicios

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { IonSearchbarComponent } from './components/ion-searchbar/ion-searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    IonSearchbarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    appRoutingProviders, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
