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
  public DisplayNewRelease: boolean;

  constructor(private _petitionItunes: PetitionsItunes) {
    this.DisplayNewRelease = false;
  }
  public changeColorFav(inputResult) {
    $.fn.extend({
      toggleText: function (stateOne, stateTwo) {
        return this.each(function () {
          stateTwo = stateTwo || '';
          console.log(stateOne, stateTwo, $(this).text());
          $(this).text() !== stateTwo && stateOne
            ? $(this).text(stateTwo)
            : $(this).text(stateOne);
        });
      }
    });
    if ( $('#' + inputResult).text() === 'favorite_border') {
      $('#' + inputResult).text('favorite');
    } else {
      $('#' + inputResult).text('favorite_border');
      this.removeFav(inputResult);
    }
  }
  searchItem(inputResult: string) {
    this._petitionItunes.searchArtist(inputResult).subscribe(
      result => {
       console.log( this.selectedArtist = result.results);
      }, error => {
        console.log(<any>error);
      });
  }
  getTheFav(inputResult) {
    this.favSelected.push(inputResult.trackId);
    this.changeColorFav(inputResult.trackId);
    this.iconcounter = this.favSelected.length;
    console.log(this.favSelected);
  }

  removeFav(inputResult) {
    for (let i = 0; i < this.favSelected.length; i++) {
      if (this.favSelected[i] === inputResult.toString()) {
        const indexOfSelected = this.favSelected.indexOf(inputResult.toString());
        this.favSelected.splice(indexOfSelected, 1);
      }
    }
    console.log(this.favSelected);
  }
}
