import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from '@angular-material-extensions/google-maps-autocomplete';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Course} from '../../services/data.service';

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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.setCurrentPosition();
  }

  sendData(): void{
    this.course.userName = this.authService.getLogin();

    this.router.navigate(['/course'], {state: {data: {origin: this.origin, dest: this.destination, course: this.course}}});
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
    this.course.origin = $event.adr_address
  }

  onAutocompleteDestinationSelected($event: google.maps.places.PlaceResult) {
    this.course.destination = $event.adr_address
  }
}
