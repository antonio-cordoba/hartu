import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient: HttpClient) { }

  AddressSearch(query: string) {

    const access_key = '287b17f62a52850b80cda1bac6f711e8';

    const testUrl = `http://api.positionstack.com/v1/forward?access_key=${access_key}&query=${query}, USA`;

    return this.httpClient.get(testUrl);
  }
}
