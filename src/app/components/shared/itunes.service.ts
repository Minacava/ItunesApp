import { Injectable } from '@angular/core';
// Para realizar las peticiones externas
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Recoger las info del api Rest
import { Observable } from 'rxjs';

@Injectable()
export class PetitionsItunes {
    public url: string;
    public artistName: string;
    constructor(
        public _http: HttpClient
    ) {
        this.url = 'http://itunes.apple.com/search?entity=song';
        this.artistName = 'jack+johnson';
    }
    getArtist(): Observable<any> {
        return this._http.get(this.url + '&term=' + this.artistName);
    }
    searchArtist(imputResult) {
        return this._http.get(this.url + '&term=' + imputResult);
    }

}
