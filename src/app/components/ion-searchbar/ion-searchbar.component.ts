import { Component, OnInit } from '@angular/core';
import { PetitionsItunes } from '../shared/itunes.service';
declare var $: any;

@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.component.html',
  styleUrls: ['./ion-searchbar.component.sass'],
  providers: [PetitionsItunes]
})
export class IonSearchbarComponent {
  public selectedArtist: any = [];
  public favSelected: any = [];
  public ArtistId: any;
  public favBook: any[];
  public iconcounter;


  constructor(private _petitionItunes: PetitionsItunes) {
  }
  public changeColorFav(inputResult) {
    $('#' + inputResult).toggleClass('active');
  }

  searchItem(inputResult: string) {
    this._petitionItunes.searchArtist(inputResult).subscribe(
      result => {
        console.log(result.results);
        this.selectedArtist = result.results;
      }, error => {
        console.log(<any>error);
      });
  }
  getTheFav(inputResult) {
    console.log(inputResult.trackId);
    this.favSelected.push(inputResult.trackId);
    this.changeColorFav(inputResult.trackId);
    this.iconcounter = this.favSelected.length;
    console.log(this.iconcounter);
  }


}
