import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { IonSearchbarComponent } from './components/ion-searchbar/ion-searchbar.component';
// Array de Rutas
const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'Home', component: HomeComponent },
    { path: 'Search', component: IonSearchbarComponent},
    { path: 'Albums', component: AlbumsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Search ' },

];

// Exportar el modulo del router

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);



