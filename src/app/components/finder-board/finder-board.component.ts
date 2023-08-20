import { Component } from '@angular/core';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-finder-board',
  templateUrl: './finder-board.component.html',
  styleUrls: ['./finder-board.component.css']
})
export class FinderBoardComponent {

  constructor (private positionService: PositionService) {}

  gpsSpot = '';
  currentAddressString = '';
  first: any;
  found: any;
  
  searchAddressString(searchString: string) {
    console.log(searchString);
    this.positionService.AddressSearch(searchString)
    .subscribe({
      next: info => {
        console.log(info);
        if ((info) && (info['results']) && (info['results']['length'] > 0)){
          this.first = (info as any).results[0];
          this.gpsSpot = `${this.first?.geometry.location.lat}, ${this.first?.geometry.location.lng}`; 
          this.found = { 
            located_address: this.first.formatted_address, 
            coordinates: this.gpsSpot
          };
          console.log(this.first);
          console.log(this.gpsSpot);
        }
      }, 
      error: er => this.first = er,
      complete: () => null
    });
  }
  copyAddress() {
    navigator.clipboard.writeText(this.gpsSpot)
    .then(() => null);
  }
}
