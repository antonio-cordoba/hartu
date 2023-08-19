import { Component } from '@angular/core';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-finder-board',
  templateUrl: './finder-board.component.html',
  styleUrls: ['./finder-board.component.css']
})
export class FinderBoardComponent {

  constructor (private positionService: PositionService) {}

  currentAddressString = '';
  first: any;

  searchAddressString(searchString: string) {
    console.log(searchString);
    this.positionService.AddressSearch(searchString)
    .subscribe(info => {
      if ((info) && (info['data']) && (info['data']['length'] > 0)){
        this.first = (info as any).data[0];
        console.log(this.first);
        const gpsSpot = `${this.first?.latitude}, ${this.first?.longitude}`; 
        console.log(gpsSpot);
        navigator.clipboard.writeText(gpsSpot)
        .then(() => null);
      }
    });
  }

}
