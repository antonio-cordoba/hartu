import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient: HttpClient) { }

  AddressSearch(query: string) {

    //const access_key = '287b17f62a52850b80cda1bac6f711e8';
    //`https://geocode.maps.co/search?q=555+5th+Ave+New+York+NY+10017+US`

    const access_key = 'AIzaSyD3vw4S7OQVJ-Yyp7oxxWSNYt_JMLkC7rw';

    // const testUrl = `http://api.positionstack.com/v1/forward?access_key=${access_key}&query=${query}, USA`;
    const testUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${access_key}`;

    return this.httpClient.get(testUrl);
  }
}
