import {Component, OnInit} from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  origin;
  dest;
  displayDirections = true;
  data;

  constructor() { }

  ngOnInit(): void {
    this.origin = history.state.data.origin;
    this.dest = history.state.data.dest;
    this.calculateDistanceAndTime();
  }

  calculateDistanceAndTime(){
    let directionsService = new google.maps.DirectionsService();

    directionsService.route({
        origin: {lat: this.origin.lat, lng: this.origin.lng},
        destination: {lat: this.dest.lat, lng: this.dest.lng},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      },
      function(response, status) {
        if (status !== 'OK') {
          return;
        } else {
          var directionsData = response.routes[0].legs[0];
          if (!directionsData) {
            return;
          }
          else {
            document.getElementById('duration').innerHTML = directionsData.duration.text;
            document.getElementById('distance').innerHTML = directionsData.distance.text;
          }
        }
      });
  }

}
