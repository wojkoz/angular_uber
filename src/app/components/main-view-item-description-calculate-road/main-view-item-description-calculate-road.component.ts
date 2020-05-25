import {Component, OnInit} from '@angular/core';
import LocationPicker from 'location-picker';

@Component({
  selector: 'main-view-item-description-calculate-road',
  templateUrl: './main-view-item-description-calculate-road.component.html',
  styleUrls: ['./main-view-item-description-calculate-road.component.css']
})
export class MainViewItemDescriptionCalculateRoadComponent implements OnInit {
//AIzaSyDpJtDD4m0UXnkt-ndbnjw5w9PzRRccFDw
  lp: LocationPicker;

  ngOnInit(){
    this.lp = new LocationPicker('map');
  }

  setLocation() {
    console.log(this.lp);
  }

}
