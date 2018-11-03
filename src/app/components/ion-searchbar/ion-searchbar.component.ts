import { Component, OnInit } from '@angular/core';
import { PetitionsItunes } from '../shared/itunes.service';
@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.sass'],
  providers: [ PetitionsItunes ]
})
export class IonSearchbarComponent  {
  public selectedArtist: any = [];
  constructor( private itunes: PetitionsItunes ) {
   }

  searchItem(imputResult: string) {
    console.log(imputResult);
    this.itunes.searchArtist(imputResult).subscribe(
      result => {
        console.log(result.results);
       this.selectedArtist = result.results;
      });
  }

}
