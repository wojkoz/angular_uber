import {Component, OnInit} from '@angular/core';
import {Course, DataService} from '../../services/data.service';
import {Router} from '@angular/router';

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
  course: Course
  price: Number;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.origin = history.state.data.origin;
    this.dest = history.state.data.dest;
    this.course = history.state.data.course
    this.calculateDistanceAndTime();
    this.price = 5;
    this.calculatePrice();
  }

  saveCourse(): void {
    this.dataService.createOrUpdate(this.course).subscribe(value => {
      this.router.navigate(['/']).then(r => {});
    })
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

  calculatePrice(){
    const distance = document.getElementById('distance').innerText.charAt(0)
    console.log(distance)
    // if(distance>2){
    //   this.price = 5 + distance * 2;
    // }
  }

}
