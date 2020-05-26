import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'main-view-item-description-calculate-road',
  templateUrl: './main-view-item-description-calculate-road.component.html',
  styleUrls: ['./main-view-item-description-calculate-road.component.css']
})
export class MainViewItemDescriptionCalculateRoadComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }


  onSetMarker(value){
    console.log(value);
  }

  inputDestination(event) {
    console.log(event.target.value)
  }
}
