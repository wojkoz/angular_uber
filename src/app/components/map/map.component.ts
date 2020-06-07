import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from '@angular-material-extensions/google-maps-autocomplete';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Course} from '../../services/data.service';
import {AuthNotLoginGuard} from "../../services/auth-not-login.guard";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Output() markerEvent = new EventEmitter<object>();
  adres_poczatkowy = "Skąd:"
  adres_koncowy = "Dokąd:"
  default_adres = "Twoja lokalizacja jest aktualnie ustawiona";

  //---------------------------------------------
  origin = {
    lat: 50.024230,
    lng: 20.971066
  };
  destination = {
    lat: 50.024230,
    lng: 20.971066
  };
  //----------------------------------------------

  course: Course
  fromInput: boolean = false;
  destInput: boolean = false;

  constructor(private authService: AuthService, private router: Router,private authNotLoginGuard: AuthNotLoginGuard) {}

  ngOnInit(): void {

    this.setCurrentPosition();
    this.course = {
      origin: 'ssss',
      destination: '',
      price: 0,
      userName: '',
    }
  }

  sendData(): void{
    this.authNotLoginGuard.selectedCourse = true;
    this.course.userName = this.authService.getLogin();
    this.router.navigate(['/course'], {state: {data: {origin: this.origin, dest: this.destination, course: this.course}}}).then(r => {console.log('course')});
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.origin.lat = position.coords.latitude;
        this.origin.lng = position.coords.longitude;
      });
    }
  }
  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.origin.lat = location.latitude;
    this.origin.lng = location.longitude;
  }

  onDestinationLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.destination.lat = location.latitude;
    this.destination.lng = location.longitude;
  }

  onAutocompleteSelected($event: google.maps.places.PlaceResult) {
    this.course.origin = $event.formatted_address
    this.fromInput = true;
  }

  onAutocompleteDestinationSelected($event: google.maps.places.PlaceResult) {
    this.course.destination = $event.formatted_address
    this.destInput = true;
  }

  isDisabled(): boolean {
    return (this.fromInput === true && this.destInput === true);
  }
}
