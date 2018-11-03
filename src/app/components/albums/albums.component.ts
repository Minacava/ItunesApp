import { Component, OnInit, Input } from '@angular/core';
import { PetitionsItunes } from '../shared/itunes.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass'],
  providers: [ PetitionsItunes ]
})
export class AlbumsComponent implements OnInit {
  public artist: any = [];
  public DisplayNewRelease: boolean;


  constructor(
    private _petitionItunes: PetitionsItunes
  ) {
  this.DisplayNewRelease = true;
  }

  ngOnInit() {
    this.getDataInfo();

}
getDataInfo() {
  this._petitionItunes.getArtist().subscribe(
    result => {
      console.log(result);
      console.log(result.results);
      this.artist = result.results;
    },
    error => {
      console.log(<any>error);
    }
  );
}
}
