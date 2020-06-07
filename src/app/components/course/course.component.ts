import {Component, OnInit} from '@angular/core';
import {Course, DataService} from '../../services/data.service';
import {Router} from '@angular/router';


type Fun = () => any;
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

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.origin = history.state.data.origin;
    this.dest = history.state.data.dest;
    this.course = history.state.data.course
    this.calculateDistanceAndTime();
    this.course.price = 5;

  }

  saveCourse(): void {
    this.dataService.createOrUpdate(this.course).subscribe(value => {
      this.router.navigate(['/']).then(r => {});
    })
  }

  calculateDistanceAndTime(){
    let directionsService = new google.maps.DirectionsService();

    const funn = () => this.calculatePrice();

    directionsService.route({
        origin: {lat: this.origin.lat, lng: this.origin.lng},
        destination: {lat: this.dest.lat, lng: this.dest.lng},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      },
      function(response, status, f:Fun = funn) {
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

            f();
          }
        }
      })
  }

  calculatePrice(){
    const distArr = document.getElementById('distance').innerText.split(" ");
    const distance = Number.parseFloat(distArr[0].replace(',','.'));
    if(distance>2){
      this.course.price = 5 + distance * 2;
    }
  }

}
